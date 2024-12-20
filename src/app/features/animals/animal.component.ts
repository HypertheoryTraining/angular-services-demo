import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-animal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="ml-4 border-gray-400 border-2 ">
      <p>Animals</p>
      <p>MSG: {{ g.msg() }}</p>
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
  providers: [],
})
export class AnimalComponent {
  g = inject(GlobalService);

  constructor() {
    console.group('AnimalComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
