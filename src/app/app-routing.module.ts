import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingPortalComponent } from './shopping-portal/shopping-portal.component';

const routes: Routes = [
  {
    path: 'shoppingPortal',
    component:ShoppingPortalComponent,
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard',
        loadChildren: () =>import('./shopping-portal/dashboard/dashboard.module').then((mod) => mod.DashboardModule) 
      }
    ]
  },
  {
    path: '',
    redirectTo: '/shoppingPortal/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
