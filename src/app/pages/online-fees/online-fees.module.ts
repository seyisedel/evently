import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineFeesPageRoutingModule } from './online-fees-routing.module';

import { OnlineFeesPage } from './online-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineFeesPageRoutingModule
  ],
  declarations: [OnlineFeesPage]
})
export class OnlineFeesPageModule {}
