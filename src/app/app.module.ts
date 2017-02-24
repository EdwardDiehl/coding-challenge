import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CodingChallengeComponent } from './coding-challenge/coding-challenge.component';
import { HomeComponent } from './coding-challenge/home/home.component';
import { SidebarComponent } from './coding-challenge/sidebar/sidebar.component';
import { TodoComponent } from './coding-challenge/todo/todo.component';
import { JokeComponent } from './coding-challenge/joke/joke.component';

import { CodingChallengeService } from './shared/services/coding-challenge.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { JokeService } from './shared/services/joke.service';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    CodingChallengeComponent,
    HomeComponent,
    SidebarComponent,
    TodoComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [
    CodingChallengeService,
    LocalStorageService,
    JokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
