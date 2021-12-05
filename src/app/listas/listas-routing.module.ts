import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasPage } from './listas.page';

const routes: Routes = [
  {
    path: '',
    component: ListasPage
<<<<<<< HEAD
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'viewcotizacion',
    loadChildren: () => import('./viewcotizacion/viewcotizacion.module').then( m => m.ViewcotizacionPageModule)
  },
  {
    path: 'milista',
    loadChildren: () => import('./milista/milista.module').then( m => m.MilistaPageModule)
  }

=======
  },  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'viewcotizacion',
    loadChildren: () => import('./viewcotizacion/viewcotizacion.module').then( m => m.ViewcotizacionPageModule)
  }

>>>>>>> 78a82cecd2e9ae42603fdf6fbcf6677a85fba8a7
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasPageRoutingModule {}
