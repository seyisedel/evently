import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxOptionsPageRoutingModule } from './tax-options-routing.module';

import { TaxOptionsPage } from './tax-options.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxOptionsPageRoutingModule,
    TranslateModule
  ],
  declarations: [TaxOptionsPage]
})
export class TaxOptionsPageModule {}
