import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { Router } from '@angular/router';
import { TraductionService } from '../services/traduction.service';

@Component({
    selector: 'app-landing4',
    templateUrl: './landing4.component.html',
    styleUrls: ['./landing4.component.css'],
    standalone: true,
    imports  : [ NgStyle, TranslateModule ]
})
export class Landing4Component implements OnInit {
  image2 ="./../../assets/images/landing_page.jpg"
  logo = "./../../assets/images/logo_teach-french-arabic.svg"

  constructor(private router : Router, private translateService: TranslateService, 
    private languageService : TraductionService){

    this.languageService.language$.subscribe( data => {
      this.translateService.setDefaultLang(data) 
    }) 

   }

  ngOnInit(): void {
  }

  navigateToContact(): void{
    this.router.navigateByUrl("/contact")
  }

}
