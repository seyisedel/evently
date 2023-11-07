import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTaxPage } from './add-new-tax.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTaxPageRoutingModule {}
