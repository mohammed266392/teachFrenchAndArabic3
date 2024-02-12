import { Component, } from '@angular/core';
import { TraductionService } from '../services/traduction.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-traduction-choice',
  standalone: true,
  imports: [NgClass],
  templateUrl: './traduction-choice.component.html',
  styleUrl: './traduction-choice.component.css'
})
export class TraductionChoiceComponent {
  display : boolean = false
  constructor(private languageService : TraductionService ){
  }

  switchFr(){
    this.languageService.changeLanguage('fr')
    this.display = true
  }
  switchAr(){
    this.display = true
    this.languageService.changeLanguage('ar')
  }
}
