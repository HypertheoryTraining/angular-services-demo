import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-people',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="ml-4 border-orange-400 border-2 border-dashed p-4 ">
    <h2 class="text-2xl text-gray-500"><pre>PeopleComponent</pre></h2>
    <p>MSG: {{ g.msg() }}</p>
    <button
      (click)="g.msg.set('Changed from PeopleComponent')"
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
