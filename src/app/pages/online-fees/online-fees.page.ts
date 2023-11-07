import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-online-fees',
  templateUrl: './online-fees.page.html',
  styleUrls: ['./online-fees.page.scss'],
})
export class OnlineFeesPage implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

}
