import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.scss"]
})
export class TaskCardComponent implements OnInit {
  type = "approved";
  cardClass = {
    approved: this.type === "approved",
    denied: this.type === "denied",
    total: this.type === "total"
  };
  constructor() {}

  ngOnInit() {}
}
