import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing4',
    templateUrl: './landing4.component.html',
    styleUrls: ['./landing4.component.css'],
    standalone: true,
    imports  : [ NgStyle]
})
export class Landing4Component implements OnInit {
  image2 ="./../../assets/images/landing_page.jpg"
  logo = "./../../assets/images/logo_teach-french-arabic.svg"

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToContact(): void{
    this.router.navigateByUrl("/contact")
  }

}
