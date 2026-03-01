import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.css'],
})
export class CounterComponent {
  title = 'Kei Angular';
  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
