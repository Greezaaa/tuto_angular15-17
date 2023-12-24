import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}} </p>
    <button (click)="increaseBy(2)">+2</button>
    <button (click)="increaseBy(-3)">-3</button>
    <button (click)="reset()">Reset to 10</button>
    `,

})


export class CounterComponent implements OnInit {

  public counter: number = 10;

  constructor() { }

  ngOnInit() {
  }

  increaseBy(value: number): void {
    this.counter = this.counter + value;
  }

  reset(): void {
    this.counter = 10;
  }

}