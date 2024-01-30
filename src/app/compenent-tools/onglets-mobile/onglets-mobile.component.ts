import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Onglet } from '../../object';

@Component({
    selector: 'app-onglets-mobile',
    templateUrl: './onglets-mobile.component.html',
    styleUrls: ['./onglets-mobile.component.css'],
    standalone: true,
    imports: [NgClass, NgFor]
})
export class OngletsMobileComponent implements OnInit {

  @Input() onglets : Onglet[] = []
  @Input() isClicked : boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(url : string): void{
    this.router.navigateByUrl("/"+url)
  }

}
