import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchOrdersPage } from './search-orders.page';

const routes: Routes = [
  {
    path: '',
    component: SearchOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchOrdersPageRoutingModule {}
