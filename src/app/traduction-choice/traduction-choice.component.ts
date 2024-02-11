import { Component, } from '@angular/core';
import { TraductionService } from '../services/traduction.service';

@Component({
  selector: 'app-traduction-choice',
  standalone: true,
  imports: [],
  templateUrl: './traduction-choice.component.html',
  styleUrl: './traduction-choice.component.css'
})
export class TraductionChoiceComponent {
  constructor(private languageService : TraductionService ){
  }

  switchFr(){
    this.languageService.changeLanguage('fr')
  }
  switchAr(){
    this.languageService.changeLanguage('ar')
  }
}
