import { Component, OnInit } from "@angular/core";

import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(public loader: LoadingBarService) {}
  title = "angular-jwt";

  ngOnInit() {}
}
