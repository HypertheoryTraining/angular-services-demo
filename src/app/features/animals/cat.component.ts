import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ZooService } from './zoo.service';

@Component({
  selector: 'app-cat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="ml-4 border-green-400 border-2 border-dashed p-4 ">
    <h2 class="text-2xl text-gray-500"><pre>CatComponent</pre></h2>
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
  z = inject(ZooService);
  constructor() {
    this.z.animals.update((a) => a.add('Cat'));
    console.group('Animals::CatComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
