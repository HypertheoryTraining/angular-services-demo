import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="ml-4 border-gray-400 border-2 p-4">
      <p>MSG: {{ g.msg() }}</p>
      <button
        (click)="g.msg.set('Changed from home')"
        class="btn btn-md btn-accent"
      >
        Change Global Msg
      </button>
      <div class="flex gap-4 ">
        <a
          class="link"
          routerLink="people"
          [routerLinkActive]="['uppercase', 'font-bold', 'text-green-400']"
          >People</a
        >
        <a
          class="link"
          routerLink="animals"
          [routerLinkActive]="['uppercase', 'font-bold', 'text-green-400']"
          >Animals</a
        >
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class HomeComponent {
  g = inject(GlobalService);

  constructor() {
    console.group('AppComponent');
    console.log(`Id is ${this.g.id}`);
    console.groupEnd();
  }
}
