import { Routes } from '@angular/router';
import { Aprendizajes } from './pages/aprendizajes/aprendizajes';
import { Inicio } from './pages/inicio/inicio';
import { Portal } from './pages/portal/portal';
import { Estudiante1 } from './components/estudiante-1/estudiante-1';
import { Estudiante2 } from './components/estudiante-2/estudiante-2';

export const routes: Routes = [
  {
    path: '',
    component: Portal,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inicio' },
      { path: 'inicio', component: Inicio },
      { path: 'aprendizajes', component: Aprendizajes },

      { path: 'hoja-de-vida/estudiante-1', component: Estudiante1 },
      { path: 'hoja-de-vida/estudiante-2', component: Estudiante2 },
      { path: 'HojaVida', pathMatch: 'full', redirectTo: 'hoja-de-vida/estudiante-1' },
      { path: '**', redirectTo: 'inicio' },
    ],
  },
];
