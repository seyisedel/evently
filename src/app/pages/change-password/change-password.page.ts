import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  public changePassword: FormGroup;
  constructor(private formBuilder:FormBuilder,private api:ApiService,private util:UtilService,private translate:TranslateService) { 
    this.changePassword = this.formBuilder.group({
      old_password: ["", Validators.compose([Validators.required,Validators.minLength(6)])],
      password: ["", Validators.compose([Validators.required,Validators.minLength(6)])],
      password_confirmation: ["", Validators.compose([Validators.required,Validators.minLength(6)])],
    });
  }

  ngOnInit() {
  }

  public async updatePassword() {
    let tdata:any;
    this.translate.get("toasts").subscribe((d) => {
      tdata = d.change;
    })
    if(this.changePassword.value.password == this.changePassword.value.password_confirmation) {
      this.api.postDataWithToken('change-password',this.changePassword.value).subscribe((res:any) => {
        console.log('res: ', res);
        if(res.success) {
          this.util.presentToast(tdata.success);
          this.changePassword.reset();
          this.util.nav.navigateForward("/settings")
        }else if(res.success == false){
          this.util.presentToast(tdata.current)
        }
      });
    } else {
      const alert = await this.util.alertCtrl.create({
        header: 'Alert',
        message: 'Password and Confirm Password does not match',
        buttons: ['OK'],
        cssClass:"custom-alert"
      });
      await alert.present();
    }
  }

  


}
