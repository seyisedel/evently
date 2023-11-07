import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visibillity',
  templateUrl: './visibillity.page.html',
  styleUrls: ['./visibillity.page.scss'],
})
export class VisibillityPage implements OnInit {

 
  text:any = 'Visible';
  constructor(private modal:ModalController) {
    this.text = [
      {
        name:"Visible"
      },
      {
        name:"Hidden"
      }
    ]
   }

  ngOnInit() {
  }
  select:any = 'Visible';
  p(i){
    this.select = i;
    this.modal.dismiss(i)
  }
}
