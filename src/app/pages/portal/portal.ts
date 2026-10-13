import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portal',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './portal.html',
  styleUrl: './portal.css',
})
export class Portal {}
