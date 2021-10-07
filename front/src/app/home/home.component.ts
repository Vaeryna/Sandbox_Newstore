import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name!: string | null;


  constructor() {
  }

  ngOnInit(): void {
    const nameRaw = sessionStorage.getItem('name');
    if (nameRaw)
      this.name = nameRaw.replace(/_/g, ' ')

    console.log('name : ', this.name);

  }
}
