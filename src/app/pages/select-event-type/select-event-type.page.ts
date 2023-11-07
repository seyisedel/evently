import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-event-type',
  templateUrl: './select-event-type.page.html',
  styleUrls: ['./select-event-type.page.scss'],
})
export class SelectEventTypePage implements OnInit {
  event:any;
  constructor() {
    this.event = [
      {
        icon:"../assets/eventTypes/speaker.svg",
        name:"Conference"
      },
      {
        icon:"../assets/eventTypes/credit-card.svg",
        name:"Seminar or Talk"
      },
      {
        icon:"../assets/eventTypes/theater.svg",
        name:"Tradeshow, Consumer Show,..."
      },
      {
        icon:"../assets/eventTypes/credit-card.svg",
        name:"Convention"
      },
      {
        icon:"../assets/eventTypes/XMLID_168_.svg",
        name:"Festival or Fair"
      },
      {
        icon:"../assets/eventTypes/microphone.svg",
        name:"Concert or Performance"
      },
      {
        icon:"../assets/eventTypes/video-camera.svg",
        name:"Screening"
      },
      {
        icon:"../assets/eventTypes/dinner.svg",
        name:"Dinner or Gala"
      },
      {
        icon:"../assets/eventTypes/book.svg",
        name:"Class, Training, or Workshop"
      },
      {
        icon:"../assets/eventTypes/meeting-room.svg",
        name:"Meeting or Networking Event"
      },
      {
        icon:"../assets/eventTypes/party.svg",
        name:"Party or Social Gathering"
      },
      {
        icon:"../assets/eventTypes/speech.svg",
        name:"Rally"
      },
      {
        icon:"../assets/eventTypes/speaker.svg",
        name:"Tournament"
      },
      {
        icon:"../assets/eventTypes/speaker.svg",
        name:"Game or Competition"
      },
      {
        icon:"../assets/eventTypes/speaker.svg",
        name:"Race or Endurance Event"
      },
      {
        icon:"../assets/eventTypes/tour.svg",
        name:"Tour"
      },
      {
        icon:"../assets/eventTypes/circus.svg",
        name:"Attraction"
      },
      {
        icon:"../assets/eventTypes/camping-tent.svg",
        name:"Camp,Trip, or Retreat"
      },
      {
        icon:"../assets/eventTypes/surface1.svg",
        name:"Appearance or Singing"
      },
      {
        icon:"../assets/eventTypes/other.svg",
        name:"Other"
      },
    ]
   }

  ngOnInit() {
  }

}
