import { Routes } from '@angular/router';
import { AnimalComponent } from './animal.component';
import { CatComponent } from './cat.component';
import { DogComponent } from './dog.component';
export const ANIMAL_ROUTES: Routes = [
  {
    path: '',
    component: AnimalComponent,
    children: [
      { path: 'dog', component: DogComponent },
      { path: 'cat', component: CatComponent },
    ],
  },
];
