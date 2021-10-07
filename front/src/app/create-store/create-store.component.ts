// noinspection ES6UnusedImports

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CreateJsonFileService } from '../services/create-json-file.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss'],
})
export class CreateStoreComponent implements OnInit {
  storeForm!: FormGroup;
  businessHoursFormMon!: FormGroup;
  businessHoursFormThu!: FormGroup;
  businessHoursFormWed!: FormGroup;
  businessHoursFormTue!: FormGroup;
  businessHoursFormFri!: FormGroup;
  businessHoursFormSat!: FormGroup;
  businessHoursFormSun!: FormGroup;
  physicalAddressForm!: FormGroup;
  shippingAddressForm!: FormGroup;

  store!: JSON;

  weekdayMon!: number;
  weekdayTue!: number;
  weekdayWed!: number;
  weekdayThu!: number;
  weekdayFri!: number;
  weekdaySat!: number;
  weekdaySun!: number;

  active_status!: boolean;

  public isCollapsedMon = true;
  public isCollapsedTue = true;
  public isCollapsedWed = true;
  public isCollapsedThu = true;
  public isCollapsedFri = true;
  public isCollapsedSat = true;
  public isCollapsedSun = true;

  constructor(
    private router: ActivatedRoute,
    private fB: FormBuilder,
    private route: Router,
    private Jfile: CreateJsonFileService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.storeForm = new FormGroup({
      active_status: new FormControl('', Validators.required),
      display_price_unit_type: new FormControl('', Validators.required),
      division_name: new FormControl('', Validators.required),
      gift_wrapping: new FormControl(Validators.required),
      label: new FormControl('', Validators.required),
      tax_included: new FormControl('', Validators.required),
      phone_number: new FormControl(''),
    });
    this.businessHoursFormMon = new FormGroup({
      from_time_Mon: new FormControl(''),
      to_time_Mon: new FormControl(''),
      weekday_Mon: new FormControl(''),
    });
    this.businessHoursFormTue = new FormGroup({
      from_time_Tue: new FormControl(''),
      to_time_Tue: new FormControl(''),
      weekday_Tue: new FormControl(''),
    });
    this.businessHoursFormWed = new FormGroup({
      from_time_Wed: new FormControl(''),
      to_time_Wed: new FormControl(''),
      weekday_Wed: new FormControl(''),
    });
    this.businessHoursFormThu = new FormGroup({
      from_time_Thu: new FormControl(''),
      to_time_Thu: new FormControl(''),
      weekday_Thu: new FormControl(''),
    });
    this.businessHoursFormFri = new FormGroup({
      from_time_Fri: new FormControl(''),
      to_time_Fri: new FormControl(''),
      weekday_Fri: new FormControl(''),
    });
    this.businessHoursFormSat = new FormGroup({
      from_time_Sat: new FormControl(''),
      to_time_Sat: new FormControl(''),
      weekday_Sat: new FormControl(''),
    });
    this.businessHoursFormSun = new FormGroup({
      from_time_Sun: new FormControl(''),
      to_time_Sun: new FormControl(''),
      weekday_Sun: new FormControl(''),
    });

    this.physicalAddressForm = new FormGroup({
      address_line_1: new FormControl(''),
      city: new FormControl(''),
      country_code: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      //   state: new FormControl(''),
      zip_code: new FormControl(''),
    });

    this.shippingAddressForm = new FormGroup({
      address_line_1: new FormControl('', Validators.required),
      city: new FormControl(''),
      country_code: new FormControl(''),

      //   state: new FormControl(''),
      zip_code: new FormControl(''),
    });
  }

  onSubmit() {
    const data = this.storeForm.value;
    const bHMonData = this.businessHoursFormMon.value;
    const bHTueData = this.businessHoursFormTue.value;
    const bHWedData = this.businessHoursFormWed.value;
    const bHThuData = this.businessHoursFormThu.value;
    const bHFriData = this.businessHoursFormFri.value;
    const bHSatData = this.businessHoursFormSat.value;
    const bHSunData = this.businessHoursFormSun.value;

    const pA = this.physicalAddressForm.value;
    const sA = this.shippingAddressForm.value;

    let bHMon = {};
    let bHTue = {};
    let bHWed = {};
    let bHThu = {};
    let bHFri = {};
    let bHSat = {};
    let bHSun = {};
    let bHTable = [];

    if (bHMonData.weekday_Mon == true) {
      bHMon = {
        from_time: bHMonData.from_time_Mon,
        to_time: bHMonData.to_time_Mon,
        weekday: 1,
      };
      bHTable.push(bHMon);
    }

    if (bHTueData.weekday_Tue == true) {
      bHTue = {
        from_time: bHTueData.from_time_Tue,
        to_time: bHTueData.to_time_Tue,
        weekday: 2,
      };
      bHTable.push(bHTue);
    }
    if (bHWedData.weekday_Wed == true) {
      bHWed = {
        from_time: bHWedData.from_time_Wed,
        to_time: bHWedData.to_time_Wed,
        weekday: 3,
      };
      bHTable.push(bHWed);
    }
    if (bHThuData.weekday_Thu == true) {
      bHThu = {
        from_time: bHThuData.from_time_Thu,
        to_time: bHThuData.to_time_Thu,
        weekday: 4,
      };
      bHTable.push(bHThu);
    }

    if (bHFriData.weekday_Fri == true) {
      bHFri = {
        from_time: bHFriData.from_time_Fri,
        to_time: bHFriData.to_time_Fri,
        weekday: 5,
      };
      bHTable.push(bHFri);
    }

    if (bHSatData.weekday_Sat == true) {
      bHSat = {
        from_time: bHSatData.from_time_Sat,
        to_time: bHSatData.to_time_Sat,
        weekday: 6,
      };
      bHTable.push(bHSat);
    }
    if (bHSunData.weekday_Sun == true) {
      bHSun = {
        from_time: bHSunData.from_time_Sun,
        to_time: bHSunData.to_time_Sun,
        weekday: 0,
      };
      bHTable.push(bHSun);
    }

    const store = {
      active_status: data.active_status,
      business_hours: bHTable,

      division_name: data.division_name,
      gift_wrapping: data.gift_wrapping,
      label: data.label,
      tax_included: data.tax_included,
      phone_number: data.phone_number,

      physical_address: {
        address_line_1: pA.address_line_1,
        city: pA.city,
        country_code: pA.country_code,
        latitude: pA.latitude,
        longitude: pA.longitude,
        //        state: pA.state,
        zip_code: pA.zip_code,
      },

      shipping_address: {
        address_line_1: sA.address_line_1,
        city: sA.city,
        country_code: sA.country_code,
        //        state: sA.state,
        zip_code: sA.zip_code,
      },
    };

    console.log('value', store);
    console.log('bhMon table', bHTable);

    //   this.nS.newStore(store).subscribe(
    //   (a: any) => console.log('new shop id : ', a.store_id)
    /* () => this.route.navigate(['/admin']) */
    // );

    this.Jfile.createStore(store).subscribe((a: any) => {
      console.log('new shop id : ', a);
      /*  this.route.navigate([`/download/store`]);*/
    });
  }
}
