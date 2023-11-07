import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { TagInputModule } from 'ngx-chips';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    IonicModule,
    HomePageRoutingModule,
    NgxProgressiveImgLoaderModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
