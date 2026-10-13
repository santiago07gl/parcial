import { Component, Input } from '@angular/core';

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  @Input() items: ContactItem[] = [
    { icon: '@', label: 'Correo', value: 'tu.correo@ejemplo.com' },
    { icon: '↗', label: 'Teléfono', value: '+57 300 000 0000' },
    { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/tu-perfil' },
  ];
}
