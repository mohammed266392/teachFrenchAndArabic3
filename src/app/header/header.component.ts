import { Component, OnInit } from '@angular/core';
import { OngletsMobileComponent } from '../compenent-tools/onglets-mobile/onglets-mobile.component';
import { NgClass } from '@angular/common';
import { OngletsComponent } from '../compenent-tools/onglets/onglets.component';
import { Onglet } from '../object';
import { OngletService } from '../services/onglet.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [OngletsComponent, NgClass, OngletsMobileComponent]
})
export class HeaderComponent implements OnInit {
  onglets : Onglet[] = [new Onglet('Home','home'),
    new Onglet('Learn french','learn-french'),
    new Onglet('Learn arabic','learn-arabic'),
    new Onglet('Contact','contact'),]
  title : string = "Teach French & Arabic"
  logo : string = "./../../assets/images/logo_teach-french-arabic.svg"
  menuBurgerIsClicked : boolean = false
  constructor(private ongletService : OngletService,
    private router : Router) { 
    this.ongletService.ongletsSontCaches$.subscribe((value) => {
      if (value) {
        // Mettez à jour votre objet Onglet ici
        this.menuBurgerIsClicked = false
      }
  });
}

  ngOnInit(): void {
  }


  clickHeader() : void {
    this.menuBurgerIsClicked = !this.menuBurgerIsClicked
  }

  navigateToRegister() : void {
    this.router.navigateByUrl("/register")
  }
}
