import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisibillityPageRoutingModule } from './visibillity-routing.module';

import { VisibillityPage } from './visibillity.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisibillityPageRoutingModule,
    TranslateModule
  ],
  declarations: [VisibillityPage]
})
export class VisibillityPageModule {}
