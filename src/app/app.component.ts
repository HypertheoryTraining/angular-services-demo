import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main
      class="container mx-auto m-8 p-8 border-2 border-dotted border-green-400 h-svh w-svh"
    >
      <h2 class="text-2xl text-gray-500"><pre>AppComponent</pre></h2>
      <div class="flex gap-4 mb-8">
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
    </main>
  `,
  styles: [],
  providers: [],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AppComponent {}
