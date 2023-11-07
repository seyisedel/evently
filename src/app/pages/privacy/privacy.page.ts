import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {
  data: string;

  constructor() { }

  ngOnInit() {
    this.data  = localStorage.getItem("privacy")
  }

}
