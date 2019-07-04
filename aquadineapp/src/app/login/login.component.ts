import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  screenTitle = 'Aquadine Login';
  logo = 'assets/Logo.png'; 

  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  function() {
    console.log("some login function");
  }

}
