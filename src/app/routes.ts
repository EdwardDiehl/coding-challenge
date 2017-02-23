import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodingChallengeComponent } from './coding-challenge/coding-challenge.component';
import { HomeComponent } from './coding-challenge/home/home.component';
import { TodoComponent } from './coding-challenge/todo/todo.component';

const appRoutes: Routes = [
  {
    path: '', component: CodingChallengeComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'todo', component: TodoComponent
      }
    ]
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
