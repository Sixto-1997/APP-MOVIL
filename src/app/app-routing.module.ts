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
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'educacion',
    loadChildren: () => import('./educacion/educacion.module').then( m => m.EducacionPageModule)
  },
  {
    path: 'experiencias',
    loadChildren: () => import('./experiencias/experiencias.module').then( m => m.ExperienciasPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'laborales',
    loadChildren: () => import('./laborales/laborales.module').then( m => m.LaboralesPageModule)
  },
  {
    path: 'personales',
    loadChildren: () => import('./personales/personales.module').then( m => m.PersonalesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
