import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasPage } from './listas.page';

const routes: Routes = [
  {
    path: '',
    component: ListasPage
  },  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasPageRoutingModule {}
