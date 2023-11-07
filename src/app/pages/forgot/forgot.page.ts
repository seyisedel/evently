import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  public buttonIcon:any = '../../../assets/icon/right.svg'
  public forgot: FormGroup;
  constructor(private navCtrl:NavController,private formBuilder:FormBuilder,private api:ApiService,private util:UtilService,private translate:TranslateService) { 
    this.forgot = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
    });
  }
  ngOnInit() {
  }

  setNew(){
    let tdata:any;
    this.translate.get("toasts").subscribe((s)=>{
      tdata = s.changedPassword;
    })
    this.util.presentLoading();
    this.api.postDataWithToken("forget-password",this.forgot.value).subscribe((success:any) => {
      if(success.success){
        this.util.presentToast(tdata.new)
        this.util.dismissLoading();
        this.util.nav.navigateForward("login")
      }else{
        this.util.presentToast(tdata.valid);
        this.util.dismissLoading();
      }
    },err =>{ 
      console.log(err);
      this.util.presentToast(tdata.some);
      this.util.dismissLoading();
    })
  }



}
