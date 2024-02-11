import { Component } from '@angular/core';
import { OngletService } from '../services/onglet.service';

@Component({
  selector: 'app-learn-arabic',
  standalone: true,
  imports: [],
  templateUrl: './learn-arabic.component.html',
  styleUrl: './learn-arabic.component.css'
})
export class LearnArabicComponent {
  selectedImageUrl: string | null = null;
  
  constructor(private ongletService : OngletService){
    
  }
  updateOnglet() {
    // Mettez à jour l'objet Onglet en utilisant le service
    this.ongletService.cacherLesOnglets();
  }
}
