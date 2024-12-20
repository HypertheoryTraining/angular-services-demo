import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'animals',
        loadChildren: () =>
          import('./features/animals/animal.routes').then(
            (r) => r.ANIMAL_ROUTES,
          ),
      },
      {
        path: 'people',
        loadComponent: () =>
          import('./features/people/people.component').then(
            (p) => p.PeopleComponent,
          ),
      },
    ],
  },
];
