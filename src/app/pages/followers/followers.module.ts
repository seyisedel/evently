import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowersPageRoutingModule } from './followers-routing.module';

import { FollowersPage } from './followers.page';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowersPageRoutingModule,
    NgxProgressiveImgLoaderModule,
    TranslateModule
  ],
  declarations: [FollowersPage]
})
export class FollowersPageModule {}
