import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtthedootPage } from '../atthedoot/atthedoot.page';
import { OnlineFeesPage } from '../online-fees/online-fees.page';

@Component({
  selector: 'app-sales-channel',
  templateUrl: './sales-channel.page.html',
  styleUrls: ['./sales-channel.page.scss'],
})
export class SalesChannelPage implements OnInit {

  text:any = 'Everywhere';
  constructor(private modalContoller:ModalController) {
    this.text = [
      {
        name:"Online Only"
      },
      {
        name:"At the door only"
      },
      {
        name:"Everywhere"
      }
    ]
   }

  ngOnInit() {
  }
  select:any = 'Everywhere';
  p(i){
    this.select = i;
    this.modalContoller.dismiss(i);
    if(i == "Online Only"){
      this.online();
    }
    if(i == "At the door only"){
      this.doot();
    }
  }

  async doot(){
    const modal = await this.modalContoller.create({
      component:AtthedootPage,
      cssClass:"doot"
    });
    return await modal.present();
  }

  async online(){
    const modal = await this.modalContoller.create({
      component:OnlineFeesPage,
      cssClass:"online-class"
    });
    return await modal.present();
  }
}
