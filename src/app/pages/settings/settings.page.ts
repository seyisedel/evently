import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  data: any;

  constructor(private modal:ModalController,private nav:NavController,private api:ApiService,private util:UtilService) { }

  ngOnInit() {
   
    this.api.getData("setting").subscribe((success:any) => {
      if(success.success){
        this.data = success.data;
        localStorage.setItem("privacy",this.data.privacy_policy_organizer);
        localStorage.setItem("terms",this.data.terms_use_organizer);
        localStorage.setItem("app_version",this.data.app_version);
        localStorage.setItem("footer_copyright",this.data.footer_copyright)        
      }
    },err => {
      console.log(err);     
    })
  }
  gp(){
    this.nav.navigateForward("change-password")
  }
  lan(){
    this.nav.navigateForward("language");
  }

  about(){
    this.nav.navigateForward("about-app")
  }

  pri(){
    this.nav.navigateForward("privacy")
  }

  ter(){
    this.nav.navigateForward("terms");
  }
  feed(){
    this.nav.navigateForward("review");
  }
  fac(){
    this.nav.navigateForward("faq")
  }
}
