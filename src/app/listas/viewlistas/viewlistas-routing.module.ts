import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewlistasPage } from './viewlistas.page';

const routes: Routes = [
  {
    path: '',
    component: ViewlistasPage
  },
  {
    path: 'cotizacion',
    loadChildren: () => import('./cotizacion/cotizacion.module').then( m => m.CotizacionPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewlistasPageRoutingModule {}
