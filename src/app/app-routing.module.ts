import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    children: [
      {
        path: '',
        loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./contacts/contactdetail/contactdetail.module').then(m => m.ContactdetailPageModule),
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
