import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponEventPageRoutingModule } from './coupon-event-routing.module';

import { CouponEventPage } from './coupon-event.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponEventPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CouponEventPage]
})
export class CouponEventPageModule {}
