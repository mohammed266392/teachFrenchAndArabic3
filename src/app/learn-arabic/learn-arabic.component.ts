import { Component } from '@angular/core';
import { OngletService } from '../services/onglet.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-learn-arabic',
  standalone: true,
  imports: [],
  templateUrl: './learn-arabic.component.html',
  styleUrl: './learn-arabic.component.css'
})
export class LearnArabicComponent {
  selectedImageUrl: string | null = null;
  
  constructor(private ongletService : OngletService,
    private titleService: Title){
    
  }
  updateOnglet() {
    // Mettez à jour l'objet Onglet en utilisant le service
    this.ongletService.cacherLesOnglets();
  }
  ngOnInit() {
    this.titleService.setTitle('Apprendre l\' arabe avec nos méthodes - profitez de professeurs reconnus pour leurs méthodologies d\'apprentissage');
  }
}
