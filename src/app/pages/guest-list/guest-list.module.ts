import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestListPageRoutingModule } from './guest-list-routing.module';

import { GuestListPage } from './guest-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestListPageRoutingModule,
    Ng2SearchPipeModule,
    NgxDatatableModule,
    TranslateModule
  ],
  declarations: [GuestListPage]
})
export class GuestListPageModule {}
