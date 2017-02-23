import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodingChallengeComponent } from './coding-challenge/coding-challenge.component';
import { HomeComponent } from './coding-challenge/home/home.component';
import { TodoComponent } from './coding-challenge/todo/todo.component';
import { JokeComponent } from './coding-challenge/joke/joke.component';

// NOTE path cannot start with a '/', so I set '' for home
const appRoutes: Routes = [
  {
    path: '', component: CodingChallengeComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'todo', component: TodoComponent
      },
      {
        path: 'joke', component: JokeComponent
      },
    ]
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
