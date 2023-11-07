import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftPageRoutingModule } from './draft-routing.module';

import { DraftPage } from './draft.page';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftPageRoutingModule,
    GooglePlaceModule,
    NgxProgressiveImgLoaderModule,
    TranslateModule
  ],
  declarations: [DraftPage]
})
export class DraftPageModule {}
