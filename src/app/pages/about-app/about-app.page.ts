import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.page.html',
  styleUrls: ['./about-app.page.scss'],
})
export class AboutAppPage implements OnInit {
  app_version: string;
  footer_copyright: string;

  constructor() { }

  ngOnInit() {
    this.app_version = localStorage.getItem("app_version");
    this.footer_copyright = localStorage.getItem("footer_copyright");
  }

}
