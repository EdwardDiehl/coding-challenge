import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CodingChallengeComponent } from './coding-challenge/coding-challenge.component';
import { HomeComponent } from './coding-challenge/home/home.component';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    CodingChallengeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
