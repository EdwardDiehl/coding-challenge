import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../shared/services/local-storage.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public readonly header: string = 'TODO List';
  public readonly text: string = 'Coming soon.';

  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

}
