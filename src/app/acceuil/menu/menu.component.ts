import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,  // Ajoutez standalone: true ici
  imports: [RouterModule]
})
export class MenuComponent {

}
