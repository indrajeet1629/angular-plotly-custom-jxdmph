import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges,
} from "@angular/core";

// ? RxJS Use Learn it later
// import { Subscription } from "rxjs";

import Plotly from "plotly.js-basic-dist";

// ? If CDN is Used
// declare const Plotly: any;

@Component({
  selector: "app-plotly",
  templateUrl: "./plotly.component.html",
  styleUrls: ["./plotly.component.css"],
})
export class PlotlyComponent implements OnInit {
  public layout: any;

  @Input() data: any;
  /* The plot target container. */
  @ViewChild("pvc", { static: true }) plotContainer: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initPlot();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes);

    if (changes && changes.data) {
      // this.initPlot();
    }

    //  ! Layout Changes
    // if (changes && changes.layout && changes.layout.previousValue) {
    //   this.initPlot();
    // }
  }

  private initPlot() {
    // this.getTheme();

    // the layout.
    this.layout = {
      title: { text: "Plotly POC " },
      hovermode: "closest",
      autosize: true,
      width: 1000,
      margin: {
        l: 150,
        r: 40,
        b: 50,
        t: 50,
        pad: 10,
      },
      yaxis: {
        // rangemode: "tozero",
      },
    };

    // if (this.data[0].values[0] > this.data[0].values[1]) {
    //   this.data[0].labels[0] = "aka is greaterthan";
    // } else {
    //   this.data[0].labels[1] = "pap is greaterthan";
    // }
    console.log("this.data", this.data);
    if (this.data !== undefined && this.layout) {
      Plotly.newPlot(this.plotContainer.nativeElement, this.data, this.layout, {
        staticPlot: false,
      });

      // Plotly.newPlot(this.plotContainer.nativeElement, this.data, this.layout, {
      //   staticPlot: false,
      //   onResize: this.onResize,
      // });
    } else {
      console.warn("The data or the layout are not defined");
    }
  }

  /** On resize this method triggers & resize the plot. */
  public onResize() {
    Plotly.Plots.resize(this.plotContainer.nativeElement);
  }
}
