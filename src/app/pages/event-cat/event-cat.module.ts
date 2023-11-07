import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventCatPageRoutingModule } from './event-cat-routing.module';

import { EventCatPage } from './event-cat.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventCatPageRoutingModule,
    TranslateModule
  ],
  declarations: [EventCatPage]
})
export class EventCatPageModule {}
