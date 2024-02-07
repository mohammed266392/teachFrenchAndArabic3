import { Component } from '@angular/core';
import { OngletService } from '../services/onglet.service';

@Component({
  selector: 'app-contact2',
  standalone: true,
  imports: [],
  templateUrl: './contact2.component.html',
  styleUrl: './contact2.component.css'
})
export class Contact2Component {
  
  constructor(private ongletService: OngletService) {}

  updateOnglet() {
    // Mettez à jour l'objet Onglet en utilisant le service
    this.ongletService.cacherLesOnglets();
  }
}
