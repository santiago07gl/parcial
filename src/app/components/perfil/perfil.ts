import { Component, Input } from '@angular/core';

export interface PerfilData {
  initials: string;
  name: string;
  role: string;
  summary: string;
  location: string;
  number: string;
}

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  @Input() data: PerfilData = {
    initials: 'TN',
    name: 'Tu nombre y apellido',
    role: 'Estudiante · Programa académico',
    summary: 'Escribe aquí un breve perfil profesional y tus intereses.',
    location: 'Ciudad, país',
    number: '01',
  };
}
