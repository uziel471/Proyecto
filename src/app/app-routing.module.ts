import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./listas/listas.module').then( m => m.ListasPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: ':productId',
        loadChildren: () => import('./products/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
      }
    ]
  },
  {
    path: 'listas',
    loadChildren: () => import('./listas/listas.module').then( m => m.ListasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
