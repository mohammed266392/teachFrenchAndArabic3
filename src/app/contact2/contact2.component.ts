import { Component } from '@angular/core';
import { OngletService } from '../services/onglet.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TraductionService } from '../services/traduction.service';
import { Title } from '@angular/platform-browser';

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
    private languageService : TraductionService,
    private titleService: Title
    ){

    this.languageService.language$.subscribe( data => {
      console.log("console : ",data)
      this.translateService.setDefaultLang(data) 
    })
  }
  ngOnInit() {
    this.titleService.setTitle('Contactez nous chez teach-frenc-arabic nous pouvons vous aider à atteindre vos objectifs');
  }
  updateOnglet() {
    // Mettez à jour l'objet Onglet en utilisant le service
    console.log('cliqqque')
    this.ongletService.cacherLesOnglets();
  }
}
