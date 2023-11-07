import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesEndPageRoutingModule } from './sales-end-routing.module';

import { SalesEndPage } from './sales-end.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesEndPageRoutingModule,
    TranslateModule
  ],
  declarations: [SalesEndPage]
})
export class SalesEndPageModule {}
