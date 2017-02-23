import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public readonly header: string = 'Hello World!!!'
  public readonly text: string = 'Welcome to the Code Challenge Demo app.'

  ngOnInit() {
  }

}
