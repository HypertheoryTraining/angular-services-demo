import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-dog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="ml-4 border-gray-400 border-2 p-4">
      <p>dog</p>
      <p>MSG: {{ g.msg() }}</p>
      <button
        (click)="g.msg.set('Changed from DogComponent')"
        class="btn btn-md btn-accent"
      >
        Change Global Msg
      </button>
    </div>
  `,
  styles: ``,
})
export class DogComponent {
  g = inject(GlobalService);

  constructor() {
    console.group('Animals::DogComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
