import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-protected-component",
  templateUrl: "./protected-component.component.html",
  styleUrls: ["./protected-component.component.scss"]
})
export class ProtectedComponentComponent implements OnInit {
  constructor(private http: HttpClient) {}
  getConfig() {
    this.http
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .subscribe(data => console.log(data));
  }
  ngOnInit() {
    this.getConfig();
  }
}
