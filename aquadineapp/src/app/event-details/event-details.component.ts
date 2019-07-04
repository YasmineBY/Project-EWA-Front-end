import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Event } from '../event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  response: any;
  eventName: string;
  eventDate: string;
  eventLocatie: string;
  eventDetails: string


  getEventForm = this.fb.group({
    eventId: ['', Validators.required,],
  });


  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }
  //When the page is loaded show the details of the event.
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        this.http.get('http://localhost:8080/AquadineAPI-1.0/rest/event/query?eventId=' + params.get('eventId')).subscribe((response) => {
          this.response = response;
          console.log(response);
          let getEvent: any = response;
          this.eventLocatie = getEvent.locatie;
          this.eventDetails = getEvent.eventDetails;
          this.eventName = getEvent.eventName;
          this.eventDate = getEvent.eventDate;
          

        })
      })

  }
}

