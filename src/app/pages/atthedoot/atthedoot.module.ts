import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtthedootPageRoutingModule } from './atthedoot-routing.module';

import { AtthedootPage } from './atthedoot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtthedootPageRoutingModule
  ],
  declarations: [AtthedootPage]
})
export class AtthedootPageModule {}
