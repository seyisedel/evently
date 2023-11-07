import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { TagInputModule } from 'ngx-chips';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    GooglePlaceModule,
    TagInputModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
