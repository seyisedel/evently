import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventSettingPageRoutingModule } from './event-setting-routing.module';

import { EventSettingPage } from './event-setting.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventSettingPageRoutingModule,
    TranslateModule
  ],
  declarations: [EventSettingPage]
})
export class EventSettingPageModule {}
