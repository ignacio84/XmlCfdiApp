import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [

  // {
  //   path: 'pages',
  //   canLoad:[AuthGuard],
  //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  // },
  // { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
  //{ path: '**', redirectTo: '404' },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
