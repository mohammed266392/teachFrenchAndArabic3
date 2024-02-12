import { Component } from '@angular/core';
import { OngletService } from '../services/onglet.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TraductionService } from '../services/traduction.service';

@Component({
  selector: 'app-contact2',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact2.component.html',
  styleUrl: './contact2.component.css'
})
export class Contact2Component {
  
  constructor(private ongletService: OngletService, 
    private translateService: TranslateService, 
    private languageService : TraductionService){

    this.languageService.language$.subscribe( data => {
      console.log("console : ",data)
      this.translateService.setDefaultLang(data) 
    })
  }

  updateOnglet() {
    // Mettez à jour l'objet Onglet en utilisant le service
    console.log('cliqqque')
    this.ongletService.cacherLesOnglets();
  }
}
