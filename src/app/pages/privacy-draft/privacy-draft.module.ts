import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyDraftPageRoutingModule } from './privacy-draft-routing.module';

import { PrivacyDraftPage } from './privacy-draft.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyDraftPageRoutingModule,
    TranslateModule
  ],
  declarations: [PrivacyDraftPage]
})
export class PrivacyDraftPageModule {}
