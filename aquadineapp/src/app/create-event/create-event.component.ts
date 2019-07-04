import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
// import {Event} from '../event'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  validFormSubmitted = null;
  testemail: string = "test2@email.com";
  response: any;
  invitelist_listId: string;

  createEventForm = this.fb.group({
    eventName: ['', Validators.required],
    eventDate: ['', Validators.required],
    eventDetails: [''],
    locatie: ['', Validators.required],
    restaurant: ['', Validators.required],
    group: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  //function for creating an event.
  createEvent() {
    this.validFormSubmitted = false;
    //if form is not valid return.
    if (this.createEventForm.invalid){
      return;
    }
    //if all requirments are met create event 
    this.validFormSubmitted = true;
    console.log(this.createEventForm.value);
    this.http.post('http://localhost:8080/AquadineAPI-1.0/rest/event/post', this.createEventForm.value)
      .subscribe();
    

    this.createEventForm.reset();
    
    //get invite list id somehow
    // for each user with groupname = group 
    // this.http.post('http://localhost:8080/AquadineAPI-1.0/rest/Inv/' + this.testemail + invitelist_listid
  }

  ngOnInit() {
  }


}
