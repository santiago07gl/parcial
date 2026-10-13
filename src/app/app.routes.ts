import { Routes } from '@angular/router';
import { Estudiante1 } from './components/estudiante-1/estudiante-1';
import { Estudiante2 } from './components/estudiante-2/estudiante-2';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hoja-de-vida/estudiante-1' },
  { path: 'hoja-de-vida/estudiante-1', component: Estudiante1 },
  { path: 'hoja-de-vida/estudiante-2', component: Estudiante2 },
  { path: 'HojaVida', pathMatch: 'full', redirectTo: 'hoja-de-vida/estudiante-1' },
  { path: '**', redirectTo: 'hoja-de-vida/estudiante-1' },
];
