import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {
  data:any;
  constructor() { }

  ngOnInit() {
    this.data = localStorage.getItem("terms")
  }

}
