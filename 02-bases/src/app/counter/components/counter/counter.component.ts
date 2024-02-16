import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    <hr />
  `,
})
export class CounterComponent {
  public counter: number = 0;
  constructor() {}

  increaseBy(value: number): void {
    value == 0 ? (this.counter = 10) : (this.counter += value);
  }

  reset() {
    this.counter = 10;
  }
}
