import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CountryPage } from '../country/country.page';

@Component({
  selector: 'app-event-setting',
  templateUrl: './event-setting.page.html',
  styleUrls: ['./event-setting.page.scss'],
})
export class EventSettingPage implements OnInit {

  constructor(private modal:ModalController,private nav:NavController) { }

  ngOnInit() {
  }

  async country(){
    const modal = await this.modal.create({
      component:CountryPage,
      cssClass:"country"
    });
    return await modal.present();
  }

  taxOptions(){
    this.nav.navigateForward("tax-options");
  }

}
