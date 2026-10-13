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
    initials: '02',
    name: 'Nombre del segundo integrante',
    role: 'Estudiante · Nombre del programa',
    summary:
      'Perfil en desarrollo con curiosidad por la innovación y el diseño de experiencias digitales. Me gusta aprender nuevas herramientas y trabajar en equipo.',
    location: 'Ciudad, Colombia',
    number: '02',
  };

  readonly contacts: ContactItem[] = [
    { icon: '@', label: 'Correo', value: 'compañero@ejemplo.com' },
    { icon: '↗', label: 'Teléfono', value: '+57 300 000 0000' },
    { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/tu-perfil' },
  ];

  readonly education: EducationItem[] = [
    {
      program: 'Nombre del programa académico',
      institution: 'Universidad o institución educativa',
      period: '2023 — Actualidad',
      details: 'Añade cursos relevantes, reconocimientos o énfasis académicos.',
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
      period: '2024 — 2025',
      description:
        'Incluye una práctica, iniciativa, voluntariado o experiencia que quieras destacar.',
      tags: ['Creatividad', 'Colaboración'],
    },
  ];
}
