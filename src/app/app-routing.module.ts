import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';

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
    AuthModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
