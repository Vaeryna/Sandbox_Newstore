// noinspection CommaExpressionJS

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  activeHome!: string;
  activeStore!: string;
  activeProduct!: string;

  constructor() {
  }

  name!: string;

  ngOnInit(): void {
    this.activeHome = 'active';
    const nameRaw = sessionStorage.getItem('name');
    if (nameRaw)
      this.name = nameRaw.replace(/_/g, ' ')

    console.log('name : ', this.name);
  }

  setActiveHome() {
    (this.activeHome = 'active'), (this.activeStore = ''), this.activeProduct = '';
  }

  setActiveStore() {
    (this.activeHome = ''), (this.activeStore = 'active'), this.activeProduct = '';
  }

  setActiveProduct() {
    (this.activeHome = ''), this.activeStore = '', this.activeProduct = 'active';
  }
}
