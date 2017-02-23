import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  constructor(private _http: Http) { }

  private static readonly jokeApiUrl: string = 'http://api.icndb.com/jokes/random'

  getJoke(): Observable<any> {
    return this._http.get(JokeService.jokeApiUrl)
      .map((response) => response.json());
  }

}
