import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  profile: any;

  constructor(private nav:NavController,private api:ApiService,private util:UtilService) { }

  ngOnInit() {
   
  }
  ionViewWillEnter(){
    this.util.presentLoading();
    this.api.profileUpdate.subscribe((d) =>{
      if(d){
        this.api.getDataWithToken("profile").subscribe((success:any) => {
          if(success.success){
            this.profile = success.data;
            console.log(success.data);            
            this.util.dismissLoading();
          }
        },err => {
          console.log(err);
          this.util.dismissLoading();
        })
      }
    })
  }

  profileEdit(){
    this.nav.navigateForward("edit-profile")
  }

}
