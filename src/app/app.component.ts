import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TraductionChoiceComponent } from './traduction-choice/traduction-choice.component';
import { TraductionService } from './services/traduction.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports:[RouterOutlet,TraductionChoiceComponent, HeaderComponent,FooterComponent]
})
export class AppComponent {
  title = 'teachFrenchAndArabic2';
  traduction : string = ''
  constructor( private languageService : TraductionService){
    languageService.language$.subscribe( data => {
      this.traduction = data
    })
  }
}
