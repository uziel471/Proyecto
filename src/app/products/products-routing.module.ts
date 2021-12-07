import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'cotizacion',
    loadChildren: () => import('../listas/viewlistas/cotizacion/cotizacion.module').then( m => m.CotizacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
