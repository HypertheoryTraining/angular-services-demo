import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ZooService } from './zoo.service';

@Component({
  selector: 'app-dog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="ml-4 border-green-400 border-2 border-dashed p-4 ">
      <h2 class="text-2xl text-gray-500"><pre>DogComponent</pre></h2>
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
  z = inject(ZooService);
  constructor() {
    this.z.animals.update((a) => a.add('Dog'));
    console.group('Animals::DogComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
