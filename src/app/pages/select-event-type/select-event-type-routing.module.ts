import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectEventTypePage } from './select-event-type.page';

const routes: Routes = [
  {
    path: '',
    component: SelectEventTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectEventTypePageRoutingModule {}
