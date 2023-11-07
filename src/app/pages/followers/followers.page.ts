import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {
  data: any;
  dataa: any;
  lan: string;

  constructor(private api:ApiService,private util:UtilService) { }

  ngOnInit() {
   this.api.profileUpdate.subscribe((D)=>{
     if(D){
      this.lan = localStorage.getItem("lan");
     }
   })
  }
  ionViewWillEnter(){
   
    this.api.getDataWithToken("followers").subscribe((success:any) =>{
      if(success){
        this.dataa = success.data;
        console.log('data',this.dataa);        
       
      }else{
       
      }
    },err => {
      console.log(err);
      
    })
  }

}
