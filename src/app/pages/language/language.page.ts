import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(private translate:TranslateService,private api:ApiService,private util:UtilService) {
    this.translate.get("SelectLanguage.label").subscribe((data: any) => {
      this.option.header = data;
    })
  }
  option: any = {
    header: 'Language',
  }
  language:any = 'en'

  ngOnInit() {
    this.api.profileUpdate.subscribe((d)=>{
      this.language = localStorage.getItem('lan');
    })
    this.select = localStorage.getItem("languageSpecific")
  }
  select: any = '';

  data:any = [
    {
      name:"English"
    },
    {
      name:"عربى"
    }
  ]
  
  checkList(item){
    this.select = item;
    if(this.select == 'عربى'){
      
      /* if (localStorage.getItem('lan') == "ar") { */
        localStorage.setItem("lan","ar")
        document.documentElement.dir = "rtl";
        this.api.profileUpdate.next(true);
        this.language = 'Arabic'
        this.translate.setDefaultLang('ar');
        localStorage.setItem("languageSpecific",'عربى');
      /* } */
    }else if(this.select == 'English'){
      /* if (localStorage.getItem('lan') == "en") { */
        document.documentElement.dir = "ltr";
        localStorage.setItem("lan","en")
        this.api.profileUpdate.next(true);
        this.translate.setDefaultLang('en');
        localStorage.setItem("languageSpecific",'English')
      /* } */
    }
  }

  languageChanged(){
    console.log('hello');
    this.util.modal.dismiss();
    this.translate.setDefaultLang(this.language);
    localStorage.setItem('lan', this.language);
    if (localStorage.getItem('lan') == "ar") {
      document.documentElement.dir = "rtl";
      this.api.profileUpdate.next(true);
    }
    if (localStorage.getItem('lan') == "en") {
      document.documentElement.dir = "ltr";
      this.api.profileUpdate.next(true);
    }
  }

}
