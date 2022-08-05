import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    // pages/main
    path: '',
    //component: PagesComponent,
    //canActivate: [LoginGuard],
    children:[
      { path: 'main', component: MainComponent, data: { titulo: 'Bienvenido' } },
      // { path: 'platillo', component: PlatillosComponent, data: { titulo: 'Platillo' } },
      // { path: 'perfil-usr', component: PerfilUsuarioComponent, data: { titulo: 'Perfil Del Usuario' } },
      // { path: 'ingr-popu', component: IngrePopularesComponent, data: { titulo: 'Ingredintes Populares' } },
      // { path: 'ingr-plat/:strIngredient', component: IngrePlatillosComponent, data: { titulo: 'Platillo Ingredinte' } },
      // { path: 'det-platillo/:idMeal', component: DetallePlatilloComponent, data: { titulo: 'Detalle' } },
      { path: '**', redirectTo: 'main' },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

