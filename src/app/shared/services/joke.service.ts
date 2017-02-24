import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  private static readonly jokeApiUrl: string = 'http://api.icndb.com/jokes/random';

  constructor(private _http: Http) { }

  getJoke(): Observable<any> {
    return this._http.get(JokeService.jokeApiUrl)
      .map((response) => response.json());
  }

}
