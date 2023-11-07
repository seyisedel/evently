import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryPageRoutingModule } from './country-routing.module';

import { CountryPage } from './country.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryPageRoutingModule,
    Ng2SearchPipeModule,
    TranslateModule
  ],
  declarations: [CountryPage]
})
export class CountryPageModule {}
