import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../shared/services/local-storage.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private _localStorageService: LocalStorageService) { }

  public readonly header: string = 'TODO List'
  public readonly text: string = 'Coming soon.'

  ngOnInit() {
  }

}
