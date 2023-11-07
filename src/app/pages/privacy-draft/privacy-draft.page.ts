import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-privacy-draft',
  templateUrl: './privacy-draft.page.html',
  styleUrls: ['./privacy-draft.page.scss'],
})
export class PrivacyDraftPage implements OnInit {

  text:any = 'Publish';
  constructor(private modal:ModalController) {
    this.text = [
      {
        name:"Publish"
      },
      {
        name:"Save As Draft"
      }
    ]
   }

  ngOnInit() {
  }
  select:any = 'Publish';
  p(i){
    this.select = i;
    this.modal.dismiss(i)
  }
}
