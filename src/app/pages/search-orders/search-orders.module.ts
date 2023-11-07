import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchOrdersPageRoutingModule } from './search-orders-routing.module';

import { SearchOrdersPage } from './search-orders.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchOrdersPageRoutingModule,
    Ng2SearchPipeModule,
    NgxProgressiveImgLoaderModule,
    TranslateModule
  ],
  declarations: [SearchOrdersPage]
})
export class SearchOrdersPageModule {}
