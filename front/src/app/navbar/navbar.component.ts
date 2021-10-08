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
  activeCustomer!: string;

  name!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.activeHome = 'active';
    const nameRaw = sessionStorage.getItem('name');

    if (nameRaw)
      this.name = nameRaw.replace(/_/g, ' ')

  }

  setActiveHome() {
    this.activeHome = 'active';
    this.activeStore = '';
    this.activeProduct = '';
    this.activeCustomer = ''
  }

  setActiveStore() {
    this.activeHome = '';
    this.activeStore = 'active';
    this.activeProduct = '';
    this.activeCustomer = ''
  }

  setActiveProduct() {
    this.activeHome = '';
    this.activeStore = '';
    this.activeProduct = 'active';
    this.activeCustomer = ''
  }

  setActiveCustomer() {
    this.activeHome = '';
    this.activeStore = '';
    this.activeProduct = '';
    this.activeCustomer = 'active'
  }
}
