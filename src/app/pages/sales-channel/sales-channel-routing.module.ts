import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesChannelPage } from './sales-channel.page';

const routes: Routes = [
  {
    path: '',
    component: SalesChannelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesChannelPageRoutingModule {}
