import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
        redirectTo: '/home',
        pathMatch:  'full'
      },
      {
        path: 'home',
        loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'herramientas-electricas',
        loadChildren:() => import('./herramientas-electricas/herramientas-electricas.module').then(m => m.HerramientasElectricasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
