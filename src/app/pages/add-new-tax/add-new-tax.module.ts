import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTaxPageRoutingModule } from './add-new-tax-routing.module';

import { AddNewTaxPage } from './add-new-tax.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTaxPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddNewTaxPage]
})
export class AddNewTaxPageModule {}
