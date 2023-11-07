import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventTypePageRoutingModule } from './event-type-routing.module';

import { EventTypePage } from './event-type.page';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventTypePageRoutingModule,
    GooglePlaceModule,
    TranslateModule
  ],
  declarations: [EventTypePage]
})
export class EventTypePageModule {}
