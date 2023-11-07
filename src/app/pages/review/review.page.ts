import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  rate:any = 1;
  message:any = '';
  email:any = '';
  public myForm: FormGroup;
  constructor(private api:ApiService,private util:UtilService,private formBuilder: FormBuilder,private translate:TranslateService) {
    this.myForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      message: ["", Validators.compose([Validators.required])],
      rate:[this.rate,Validators.compose([Validators.required])]
    });
   }
   names:any='sad';

  ngOnInit() {
  }
  setRatingValue(i,name){
    this.rate = i;
    this.names = name;
    console.log(this.rate,this.names);
    
  }

  edit(){
    let tdata:any;
    this.translate.get("toasts").subscribe((d) =>{
      tdata = d.review
    })
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("message",this.message);
    fd.append("rate",this.rate);
    fd.append("email",this.email);
    this.api.postDataWithToken("add-feedback",this.myForm.value).subscribe((success:any) => {
      if(success.success){
        this.util.dismissLoading();
        this.util.presentToast(tdata.review);
        this.util.nav.navigateForward("/home")
      }
    },err => {
      console.log(err);
      this.util.dismissLoading();
    })
  }
}
