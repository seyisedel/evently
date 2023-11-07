import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyDraftPage } from './privacy-draft.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyDraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyDraftPageRoutingModule {}
