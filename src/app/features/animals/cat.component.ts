import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-cat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="ml-4 border-gray-400 border-2 p-4">
    <p>Cat</p>
    <p>MSG: {{ g.msg() }}</p>
    <button
      (click)="g.msg.set('Changed from CatComponent')"
      class="btn btn-md btn-accent"
    >
      Change Global Msg
    </button>
  </div>`,
  styles: ``,
  providers: [],
})
export class CatComponent {
  g = inject(GlobalService);

  constructor() {
    console.group('Animals::CatComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
