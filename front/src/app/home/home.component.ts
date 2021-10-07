import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name!: string;

  constructor() {
  }

  ngOnInit(): void {
    const nameRaw = sessionStorage.getItem('name');
    console.log(nameRaw);

    if (nameRaw)
      this.name = nameRaw.replace(/_/g, ' ')

    console.log('name : ', this.name);
  }
}
