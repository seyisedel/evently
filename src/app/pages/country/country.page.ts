import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { countryCode } from 'src/environments/environment';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  data:any = countryCode;
  select: any = 'Nigeria';
  term:any;
  constructor(private util:UtilService) { }

  ngOnInit() {
    localStorage.setItem("country","Nigeria")
  }

  checkList(item){
    this.util.modal.dismiss();
    this.select = item;
    localStorage.setItem("country",item)
  }

}
