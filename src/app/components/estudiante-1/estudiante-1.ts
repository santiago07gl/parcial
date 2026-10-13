import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactItem, Contacto } from '../contacto/contacto';
import { ExperienceItem, Experiencia } from '../experiencia/experiencia';
import { EducationItem, Formacion } from '../formacion/formacion';
import { Habilidades } from '../habilidades/habilidades';
import { Perfil, PerfilData } from '../perfil/perfil';

@Component({
  selector: 'app-estudiante-1',
  imports: [RouterLink, Perfil, Contacto, Formacion, Habilidades, Experiencia],
  templateUrl: './estudiante-1.html',
  styleUrl: './estudiante-1.css',
})
export class Estudiante1 {
  readonly profile: PerfilData = {
    initials: 'SGL',
    name: 'Santiago Gonzalez Laverde',
    role: 'Estudiante · Ingeniería de Sistemas',
    summary:
      'Estudiante en formación con interés en la tecnología y el desarrollo de soluciones digitales. Disfruto aprender, colaborar y llevar ideas a proyectos concretos.',
    location: 'Tulua, Colombia',
    number: '01',
  };

  readonly contacts: ContactItem[] = [
    { icon: '@', label: 'Correo', value: 'santiago.gonzalez07@uceva.edu.co' },
    { icon: '↗', label: 'Teléfono', value: '+57 314 5868792' },
    { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/tu-perfil' },
  ];

  readonly education: EducationItem[] = [
    {
      program: 'Ingeniería de Sistemas',
      institution: 'UCEVA',
      period: '2025 — Actualidad',
      details: 'Curso de HTML, CSS y JavaScript, con énfasis en desarrollo web y aplicaciones.',
    },
  ];

  readonly skills: string[] = [
    'HTML y CSS',
    'Angular',
    'Git y GitHub',
    'Comunicación',
    'Trabajo en equipo',
  ];

  readonly experiences: ExperienceItem[] = [
    {
      title: 'Página web de hoja de vida',
      organization: 'Proyecto académico',
      period: '2026',
      description:
        'Diseño y composición de una página web para presentar información profesional mediante componentes reutilizables.',
      tags: ['Angular', 'HTML', 'CSS'],
    },
    {
      title: 'Experiecia personal',
      organization: 'Proyectos realizados en la institucion, calculadoras, paginas y demas',
      period: '2025 — 2026',
      description:
        'realice solo una calculadora de Indice de Masa Corporal, una pagina web de hoja de vida y una pagina web de calculadora de edad',
      tags: ['Colaboración', 'Aprendizaje'],
    },
  ];
}
