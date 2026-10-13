import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades {
  @Input() items: string[] = [
    'HTML y CSS',
    'Angular',
    'Git y GitHub',
    'Comunicación',
    'Trabajo en equipo',
  ];
}
