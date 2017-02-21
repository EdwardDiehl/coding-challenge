import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodingChallengeComponent } from './coding-challenge/coding-challenge.component';
import { HomeComponent } from './coding-challenge/home/home.component';

const appRoutes: Routes = [
  {
    path: '', component: CodingChallengeComponent,
    children: [
      {
        path: '', component: HomeComponent
      }
    ]
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
