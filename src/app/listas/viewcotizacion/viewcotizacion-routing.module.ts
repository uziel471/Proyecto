import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcotizacionPage } from './viewcotizacion.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcotizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcotizacionPageRoutingModule {}
