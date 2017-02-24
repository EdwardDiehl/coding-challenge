import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  write(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
  }

  read(key: string): any {
    let value: string = localStorage.getItem(key);

    if (value && value !== 'undefined' && value !== 'null') {
      return JSON.parse(value);
    }

    return null;
  }
}
