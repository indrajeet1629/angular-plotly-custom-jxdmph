import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Angular";

  charts = [
    // Scatter
    [{ x: [1, 2, 3], y: [2, 5, 3], type: "scatter", marker: { color: "red" } }],
    // Pie
    [{ values: [70, 90], labels: ["aka", "pap"], type: "pie" }],
    // Bar
    [
      {
        x: ["giraffes", "orangutans", "monkeys"],
        y: [20, 14, 23],
        type: "bar",
      },
    ],
  ];
}
