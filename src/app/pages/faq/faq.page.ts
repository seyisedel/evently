import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  select: any;
  dataOf: any;

  constructor(private api:ApiService,private util:UtilService) { }

  ngOnInit() {
    this.api.getDataWithToken("faq").subscribe((success:any) => {
      if(success.success){
        this.dataOf = success.data;
        this.dataOf.forEach(element => {
            element.isExpand = false;
            element.counter++
        });
        
      }
    },err => {
      console.log(err);
    })
  }

  expandToggle(i:any){
      if(i.isExpand==false){
        i.isExpand = true;
      }else{
        i.isExpand = false;
      }
  }

}
