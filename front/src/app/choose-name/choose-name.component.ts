import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Router} from '@angular/router';
import {CookiesService} from '../services/cookies.service';
import {CreateJsonFileService} from "../services/create-json-file.service";


@Component({
  selector: 'app-choose-name',
  templateUrl: './choose-name.component.html',
  styleUrls: ['./choose-name.component.scss'],
})
export class ChooseNameComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router, private cS: CookiesService, private jS: CreateJsonFileService) {
  }

  nameForm!: FormGroup;

  ngOnInit(): void {
    console.log('name Init: ', sessionStorage.getItem('name'));
    this.nameForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const dataRaw = this.nameForm.value;

    const dataRawName = dataRaw.name

    const data = dataRawName.replace(/ /g, "_")

    dataRaw.name = data;
    console.log("data", data);
    sessionStorage.setItem('name', data);

    //this.route.navigate([`/`])


    console.log('dataRaw: ', dataRaw);
    this.cS.setCookie(dataRaw);

    window.location.reload()


  }
}
