import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

function checkPasswords(group: FormGroup) {
  let pass = group.controls.password.value;
  let confirmPass = group.controls.passwordcheck.value;

  if (pass !== confirmPass) {
    return {
      passDomain: {
        parsedPass: confirmPass
      }
    }
  }
  return null;

}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  logo = 'assets/Logo.png';
  emailPattern = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}";
  validAccountSubmitted = null;
  validGetSubmitted = null;
  // bcrypt = require('bcrypt');
  // passwordHash = require('password-hash');
  // hashedPassword = this.passwordHash.generate('password123');

  angForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', Validators.required],
    passwordcheck: ['', Validators.required]
  });

  // this function issolated the domain so that it can be saved as group in the database
  getGroup(email: String){
    let [_, domain] = email.split("@");
    let [group, nl] = domain.split(".");
    return group;
}

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  //Function for creating an account
  createAccount() {
    this.validAccountSubmitted = false;
    //checks if form is valid if not return
    if (this.angForm.invalid) {
      return;
    }
    //if all requirments are met create the account.
    this.validAccountSubmitted = true;
    let user: User = this.angForm.value;
    user.groupname = this.getGroup(user.email);
    this.http.post('http://localhost:8080/AquadineAPI-1.0/rest/users/post', user)
      .subscribe();
    this.angForm.reset();
  }



  ngOnInit() {

  }

}
