import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TraductionService {
  private language = new BehaviorSubject<string>('fr');
  language$ = this.language.asObservable(); // aucin composant va modifier cette valeur donc c'est inutile

  changeLanguage(value : string) {
    this.language.next(value);
  }
}