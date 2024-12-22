import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ZooService } from './zoo.service';

@Component({
  selector: 'app-animal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="ml-4 border-orange-400 border-2 border-dashed p-4 ">
      <h2 class="text-2xl text-gray-500"><pre>AnimalComponent</pre></h2>
      <p>MSG: {{ g.msg() }}</p>
      <p>Animals:</p>
      <ul class="list-decimal ml-4">
        @for (animal of z.animals().values(); track $index) {
          <li class="ml-4">{{ animal }}</li>
        } @empty {
          <p>No Animals</p>
        }
      </ul>
      <button
        (click)="g.msg.set('Changed from AnimalsComponent')"
        class="btn btn-md btn-accent"
      >
        Change Global Msg
      </button>
      <div class="flex gap-4">
        <a
          class="link"
          routerLink="dog"
          [routerLinkActive]="['uppercase', 'font-bold', 'text-green-400']"
          >Dog</a
        >
        <a
          class="link"
          routerLink="cat"
          [routerLinkActive]="['uppercase', 'font-bold', 'text-green-400']"
          >Cat</a
        >
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
  providers: [ZooService],
})
export class AnimalComponent {
  g = inject(GlobalService);
  z = inject(ZooService);
  constructor() {
    console.group('AnimalComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
