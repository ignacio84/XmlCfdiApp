import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        //canActivate: [LoginGuard], 
        component: LoginComponent,
      },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
