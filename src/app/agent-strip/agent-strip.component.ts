import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-agent-strip",
  templateUrl: "./agent-strip.component.html",
  styleUrls: ["./agent-strip.component.scss"]
})
export class AgentStripComponent implements OnInit {
  total = 78;
  trainee = (12 / 78) * 100;
  associate = (11 / 78) * 100;
  fa = (10 / 78) * 100;
  d = (9 / 78) * 100;
  md = (8 / 78) * 100;
  smd = (7 / 78) * 100;
  emd = (6 / 78) * 100;
  svp = (5 / 78) * 100;
  evp = (4 / 78) * 100;
  pc = (3 / 78) * 100;
  cc = (2 / 78) * 100;
  bc = (1 / 78) * 100;

  constructor() {}

  ngOnInit() {}
}
