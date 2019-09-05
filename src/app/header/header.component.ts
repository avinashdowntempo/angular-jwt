import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  currentURL;
  parentURL;
  subNavs;
  navs = [
    { value: "Dashboard", subroutes: [] },
    { value: "Queue", subroutes: ["Active", "History", "Manage"] },
    {
      value: "CRM",
      subroutes: ["Agents", "Clients", "Prospects", "Home office"]
    },
    {
      value: "Leaderboards",
      subroutes: [
        "Recruits",
        "Sub Points",
        "Paid points",
        "Sub apps",
        "Paid Apps",
        "Licensed Agents",
        "1st checks"
      ]
    },
    {
      value: "Maintanence",
      subroutes: [
        "Contests",
        "Carriers",
        "Assets",
        "Notifications",
        "Messaging",
        "Compensation",
        "Roles",
        "Password",
        "Intro"
      ]
    },
    { value: "Commisions", subroutes: ["Process", "History", "Policies"] }
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentURL = this.router.url.split("/")[1];
    this.subNavs = this.navs
      .filter(val => val.value === this.currentURL)
      .map(data => data.subroutes)[0];
    this.parentURL = this.activatedRoute.parent.url.subscribe(url => {
      console.warn(url);
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        console.log(event);
        this.currentURL = this.router.url.split("/")[1];
      });
  }
}
