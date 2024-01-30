import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Onglet } from '../../object';

@Component({
    selector: 'app-onglets',
    templateUrl: './onglets.component.html',
    styleUrls: ['./onglets.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class OngletsComponent implements OnInit {
  @Input() onglets: Onglet[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(url : string): void{
    this.router.navigateByUrl("/"+url)
  }

}
