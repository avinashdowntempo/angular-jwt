import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-custom-dropdown",
  templateUrl: "./custom-dropdown.component.html",
  styleUrls: ["./custom-dropdown.component.scss"]
})
export class CustomDropdownComponent implements OnInit {
  @Input() filter;
  @Input() values: [any];
  length = 0;
  options = [
    // { name: "OptionA", value: "1", checked: false },
    // { name: "OptionB", value: "2", checked: false },
    // { name: "OptionC", value: "3", checked: false }
  ];
  constructor() {}
  getLength() {
    this.length = this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value).length;
  }
  ngOnInit() {
    console.log(this.values);
    this.values.forEach(element => {
      this.options.push({ name: element, value: element, checked: false });
    });
  }
}
