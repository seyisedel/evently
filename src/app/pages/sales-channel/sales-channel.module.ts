import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesChannelPageRoutingModule } from './sales-channel-routing.module';

import { SalesChannelPage } from './sales-channel.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesChannelPageRoutingModule,
    TranslateModule
  ],
  declarations: [SalesChannelPage]
})
export class SalesChannelPageModule {}
