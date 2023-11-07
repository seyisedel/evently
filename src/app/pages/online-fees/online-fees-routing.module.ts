import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineFeesPage } from './online-fees.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineFeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineFeesPageRoutingModule {}
