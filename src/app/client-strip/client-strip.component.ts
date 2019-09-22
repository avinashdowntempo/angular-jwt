import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-client-strip",
  templateUrl: "./client-strip.component.html",
  styleUrls: ["./client-strip.component.scss"]
})
export class ClientStripComponent implements OnInit {
  total = 5000;
  life = (1 / 5000) * 100;
  annuity = (1499 / 5000) * 100;
  debt = (2000 / 5000) * 100;
  loan = (1500 / 5000) * 100;
  constructor() {}

  ngOnInit() {}
}
