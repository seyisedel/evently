import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesEndPage } from './sales-end.page';

const routes: Routes = [
  {
    path: '',
    component: SalesEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesEndPageRoutingModule {}
