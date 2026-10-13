import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactItem, Contacto } from '../contacto/contacto';
import { ExperienceItem, Experiencia } from '../experiencia/experiencia';
import { EducationItem, Formacion } from '../formacion/formacion';
import { Habilidades } from '../habilidades/habilidades';
import { Perfil, PerfilData } from '../perfil/perfil';

@Component({
  selector: 'app-estudiante-2',
  imports: [RouterLink, Perfil, Contacto, Formacion, Habilidades, Experiencia],
  templateUrl: './estudiante-2.html',
  styleUrl: './estudiante-2.css',
})
export class Estudiante2 {
  readonly profile: PerfilData = {
    initials: 'NR',
    name: 'Nicolas Restrepo',
    role: 'Estudiante · Ingeniería de Sistemas',
    summary:
      'Perfil en desarrollo con curiosidad por la innovación y el diseño de experiencias digitales. Me gusta aprender nuevas herramientas y trabajar en equipo.',
    location: 'Tulua, Colombia',
    number: '02',
  };

  readonly contacts: ContactItem[] = [
    { icon: '@', label: 'Correo', value: 'nicolas.restrepo01@uceva.edu.co' },
    { icon: '↗', label: 'Teléfono', value: '+57 316 889 2959' },
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
    'JavaScript',
    'Diseño UI',
    'Resolución de problemas',
    'Creatividad',
    'Trabajo en equipo',
  ];

  readonly experiences: ExperienceItem[] = [
    {
      title: 'Prototipo de aplicación digital',
      organization: 'Proyecto académico',
      period: '2025',
      description:
        'Exploración y prototipado de una interfaz digital, desde la organización de ideas hasta la presentación del diseño.',
      tags: ['JavaScript', 'Diseño UI', 'Prototipado'],
    },
    {
      title: 'Proyecto personal o experiencia',
      organization: 'Experiencia por completar',
      period: '2025 — 2026',
      description:
        'Incluye una práctica, iniciativa, voluntariado o experiencia que quieras destacar.',
      tags: ['Creatividad', 'Colaboración'],
    },
  ];
}
