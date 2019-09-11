import { Component, OnInit, ViewChild } from "@angular/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { FormControl } from "@angular/forms";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";

import * as _moment from "moment";
const moment = _moment;
// tslint:disable-next-line:no-duplicate-imports
// import { default as _rollupMoment } from "moment";

export const MY_FORMATS = {
  parse: {
    dateInput: "LL"
  },
  display: {
    dateInput: "ddd, MMM D",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: "app-custom-date-picker",
  templateUrl: "./custom-date-picker.component.html",
  styleUrls: ["./custom-date-picker.component.scss"],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class CustomDatePickerComponent implements OnInit {
  date = new FormControl(moment());
  date2 = new FormControl(moment().add(1, "days"));
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `calendar2`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/24px(1).svg`)
    );
  }
  nextDay1() {
    this.date.setValue(moment(this.date.value, "DD-MM-YYYY").add(1, "days"));
    // alert("next day1");
  }
  nextDay2() {
    this.date2.setValue(moment(this.date2.value, "DD-MM-YYYY").add(1, "days"));
  }
  prevDay2() {
    this.date2.setValue(moment(this.date2.value, "DD-MM-YYYY").add(-1, "days"));
  }
  prevDay1() {
    this.date.setValue(moment(this.date.value, "DD-MM-YYYY").add(-1, "days"));
  }
  ngOnInit() {}
}
