import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css',
  standalone: true,  // Ajoutez standalone: true ici
  imports: [RouterModule]
})
export class AcceuilComponent {
title = 'firstapp'
}
