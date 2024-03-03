import { Component } from '@angular/core';
import { Landing4Component } from '../landing4/landing4.component';
import { OngletService } from '../services/onglet.service';
import { SavoirFaire5Component } from '../savoir-faire5/savoir-faire5.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports :  [Landing4Component, SavoirFaire5Component]

})
export class HomeComponent {
  constructor(private ongletService: OngletService,
    private titleService: Title) {}

    ngOnInit() {
      this.titleService.setTitle("Apprenez le Français et l'Arabe en Ligne ou à Domicile - Cours pour Francophones et Arabophones | تعلم الفرنسية والعربية عبر الإنترنت أو في المنزل - دورات للناطقين بالفرنسية والعربية");
    }

  updateOnglet() {
    // Mettez à jour l'objet Onglet en utilisant le service
    this.ongletService.cacherLesOnglets();
  }

}
