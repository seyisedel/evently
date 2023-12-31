import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxOptionsPage } from './tax-options.page';

const routes: Routes = [
  {
    path: '',
    component: TaxOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxOptionsPageRoutingModule {}
