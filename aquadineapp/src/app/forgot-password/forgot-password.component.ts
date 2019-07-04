import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  logo = 'assets/Logo.png';
  response: any;
  validFormSubmitted = null;
  validGetSubmitted = null;
  passwordempty = null;
  emailPattern = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}";
  userpassword: string = "null";


  updatePasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['']
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  //Function for updating your password in the database by giving your email and a new password.
  updatePassword() {
    this.validFormSubmitted = false;
    this.validGetSubmitted = false;
    this.passwordempty = false;
    //if form is not valid return.
    if (this.updatePasswordForm.invalid) {
      return;
    }
    //if form is valid get the info of the user and put in in object changeUser
    this.validFormSubmitted = true;
    this.http.get('http://localhost:8080/AquadineAPI-1.0/rest/users/get/' + this.updatePasswordForm.value.email).subscribe((response) => {
      this.response = response;
      let changeUser: any = response;
      changeUser.password = this.updatePasswordForm.value.password;
      //if no password is given return.
      if(changeUser.password == "" || changeUser.password == null){
        this.validFormSubmitted = false;
        this.passwordempty = true;
        console.log("password is required");
        return;
      }
      //if all requirments are met update the password.
      this.http.put('http://localhost:8080/AquadineAPI-1.0/rest/users/change/' + this.updatePasswordForm.value.email,
      changeUser).subscribe();
      this.updatePasswordForm.reset();
      console.log("password has been updated");
    })
  }
  //Function for getting your password from the database by filling in your email.
  getPassword() {
    this.validGetSubmitted = false;
    this.validFormSubmitted = false;
    if (this.updatePasswordForm.invalid) {
      return;
    }
    this.validGetSubmitted = true;
    this.passwordempty = false;
    this.http.get('http://localhost:8080/AquadineAPI-1.0/rest/users/get/' + this.updatePasswordForm.value.email).subscribe((response) => {
      this.response = response;
      let getUserPassword: any = response;
      this.userpassword = getUserPassword.password;
      console.log("password has been sent");
      this.updatePasswordForm.reset();      
  })
}



  ngOnInit() {
  }

}
