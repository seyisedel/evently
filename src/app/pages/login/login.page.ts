import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData:any = {email:'',password:'',provider:"LOCAL",device_token:"123"};
  err: any;
  public myForm:FormGroup;
  constructor(private nav:NavController,private api:ApiService,private util:UtilService,private formBuilder:FormBuilder,private translate:TranslateService,public menu:MenuController) { 

  
    this.menu.enable(false)
    this.api.deviceToken = this.api.deviceToken ? this.api.deviceToken : "I hate this";
    this.myForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ["", Validators.compose([Validators.required,Validators.minLength(6)])],
      provider:["LOCAL"],
      device_token:[this.api.deviceToken]
    });
  }

  ngOnInit() {
  }

  login(){
    let tdata:any;
    this.translate.get("toasts").subscribe((d) =>{
      tdata = d.login
    })
    this.util.presentLoading();
    this.api.postData("login",this.myForm.value).subscribe((success:any) => {
      if(success.success == true){
        localStorage.setItem("token",success.data.token)
        this.api.profileUpdate.next(true);
        this.util.nav.navigateRoot("home");
        this.util.dismissLoading();
      }else{
        this.util.presentToast(tdata.inva);
        this.util.dismissLoading();
      }
    }, err => {
      console.log(err);      
      console.log('hi');   
      this.err=err.error.errors;
      this.util.dismissLoading();
      this.util.presentToast(tdata.inva)
    })
  }
  signUp(){
    this.util.nav.navigateForward("create-account")
  }
  forgot(){
    this.util.nav.navigateForward("/forgot")
  }

}
