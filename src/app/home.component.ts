import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div
      class="container m-4  p-4 border-2 border-dashed border-blue-600 h-fit w-fit"
    >
      <h2 class="text-2xl text-gray-500"><pre>HomeComponent</pre></h2>
      <p>MSG: {{ g.msg() }}</p>
      <button
        (click)="g.msg.set('Changed from HomeComponent')"
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
