import { Component, Input } from '@angular/core';

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
})
export class Experiencia {
  @Input() items: ExperienceItem[] = [
    {
      title: 'Nombre del proyecto académico',
      organization: 'Proyecto universitario',
      period: '2025',
      description: 'Describe tu aporte, las herramientas y el resultado obtenido.',
      tags: ['Proyecto', 'Colaboración'],
    },
  ];
}
