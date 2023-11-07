import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  email:any = '';
  first_name:any = '';
  last_name:any ='';
  password:any='';
  err: any;
  confirm_email:any = '';
  phone:any='';
  public icon:any = "../../../assets/svg_icon/back.svg";
  constructor(private nav:NavController,private api:ApiService,private util:UtilService) { 
    this.util.menu.enable(false);
  }
  ngOnInit() {
  }

  login(){
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("email",this.email);
    fd.append("first_name",this.first_name);
    fd.append("last_name",this.last_name);
    fd.append("password",this.password);
    fd.append("confirm_email",this.confirm_email);
    fd.append("phone",this.phone)
    this.api.postData("register",fd).subscribe((success:any) => {
      if(success.success){
        localStorage.setItem("token",success.data.token);
        this.nav.navigateForward("/setup-profile");
        this.api.profileUpdate.next(true);
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);
      this.err = err.error.errors;
      this.util.dismissLoading();
    })
  }
}
