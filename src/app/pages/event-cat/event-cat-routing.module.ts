import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCatPage } from './event-cat.page';

const routes: Routes = [
  {
    path: '',
    component: EventCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventCatPageRoutingModule {}
