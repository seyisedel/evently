import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTicketPageRoutingModule } from './edit-ticket-routing.module';

import { EditTicketPage } from './edit-ticket.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTicketPageRoutingModule,
    TranslateModule
  ],
  declarations: [EditTicketPage]
})
export class EditTicketPageModule {}
