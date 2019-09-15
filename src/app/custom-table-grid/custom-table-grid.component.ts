import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-table-grid",
  templateUrl: "./custom-table-grid.component.html",
  styleUrls: ["./custom-table-grid.component.scss"]
})
export class CustomTableGridComponent implements OnInit {
  vals = [
    [
      "1",
      "Mark",
      "Otto",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo"
    ],
    [
      "2",
      "Mark",
      "Otto",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo"
    ],
    [
      "3",
      "Mark",
      "Otto",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo"
    ]
  ];
  constructor() {}

  ngOnInit() {}
}
