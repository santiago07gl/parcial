import { Component, Input } from '@angular/core';

export interface EducationItem {
  program: string;
  institution: string;
  period: string;
  details: string;
}

@Component({
  selector: 'app-formacion',
  imports: [],
  templateUrl: './formacion.html',
  styleUrl: './formacion.css',
})
export class Formacion {
  @Input() items: EducationItem[] = [
    {
      program: 'Nombre del programa académico',
      institution: 'Universidad o institución',
      period: 'Año de inicio — Actualidad',
      details: 'Incluye cursos, reconocimientos u otra información relevante.',
    },
  ];
}
