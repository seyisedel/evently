import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisibillityPage } from './visibillity.page';

const routes: Routes = [
  {
    path: '',
    component: VisibillityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisibillityPageRoutingModule {}
