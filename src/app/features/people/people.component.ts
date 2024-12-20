import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-people',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="ml-4 border-gray-400 border-2 p-4">
    <p>People</p>
    <p>MSG: {{ g.msg() }}</p>
    <button
      (click)="g.msg.set('Changed from home')"
      class="btn btn-md btn-accent"
    >
      Change Global Msg
    </button>
  </div>`,
  styles: ``,
  providers: [],
})
export class PeopleComponent {
  g = inject(GlobalService);

  constructor() {
    console.group('PeopleComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
