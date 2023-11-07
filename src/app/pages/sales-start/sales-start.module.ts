import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesStartPageRoutingModule } from './sales-start-routing.module';

import { SalesStartPage } from './sales-start.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesStartPageRoutingModule,
    TranslateModule
  ],
  declarations: [SalesStartPage]
})
export class SalesStartPageModule {}
