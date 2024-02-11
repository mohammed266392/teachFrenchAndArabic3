import { Component } from '@angular/core';
import { OngletService } from '../services/onglet.service';

@Component({
  selector: 'app-learn-french',
  standalone: true,
  imports: [],
  templateUrl: './learn-french.component.html',
  styleUrl: './learn-french.component.css'
})
export class LearnFrenchComponent {
  selectedImageUrl: string | null = null;
  
  constructor(private ongletService : OngletService){
    
  }
  updateOnglet() {
    // Mettez à jour l'objet Onglet en utilisant le service
    this.ongletService.cacherLesOnglets();
  }
}
