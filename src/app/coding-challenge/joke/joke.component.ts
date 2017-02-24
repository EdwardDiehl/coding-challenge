import { Component, OnInit } from '@angular/core';
import { JokeService } from './../../shared/services/joke.service';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  public readonly header: string = 'Time for some Joke ;)';
  public joke: any = { value: { joke: '' }};

  constructor(private _jokeService: JokeService) { }

  ngOnInit() {
    this.getJoke();
  }

  public getJoke(): void {
    // NOTE It is possible to use async pipe in template instead of subscribing to the observable in component
    this._jokeService.getJoke().subscribe(data => this.joke = data.value.joke);
  }

}
