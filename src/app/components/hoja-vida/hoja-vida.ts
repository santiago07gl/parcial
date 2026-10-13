import { Component } from '@angular/core';
import { Estudiante1 } from '../estudiante-1/estudiante-1';
import { Estudiante2 } from '../estudiante-2/estudiante-2';

@Component({
  selector: 'app-hoja-vida',
  imports: [Estudiante1, Estudiante2],
  templateUrl: './hoja-vida.html',
  styleUrl: './hoja-vida.css',
})
export class HojaVida {

}
