import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCouponPageRoutingModule } from './add-coupon-routing.module';

import { AddCouponPage } from './add-coupon.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCouponPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [AddCouponPage]
})
export class AddCouponPageModule {}
