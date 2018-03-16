import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        data: { moduleName: 'home' },
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'admin',
        data: { moduleName: 'admin' },
        loadChildren: './modules/admin/admin.module#AdminModule'
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
