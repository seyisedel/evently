import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesStartPage } from './sales-start.page';

const routes: Routes = [
  {
    path: '',
    component: SalesStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesStartPageRoutingModule {}
