import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex gap-4">
      <a
        class="link"
        routerLink=""
        [routerLinkActive]="['uppercase', 'font-bold', 'text-green-400']"
        [routerLinkActiveOptions]="{ exact: true }"
        >Root</a
      >
      <a
        class="link"
        routerLink="home"
        [routerLinkActive]="['uppercase', 'font-bold', 'text-green-400']"
        >Home</a
      >
    </div>
    <router-outlet />
  `,
  styles: [],
  providers: [],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AppComponent {}
