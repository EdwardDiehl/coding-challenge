import { Component, OnInit } from '@angular/core';
import { CodingChallengeService } from '../shared/services/coding-challenge.service';

@Component({
  selector: 'coding-challenge',
  templateUrl: './coding-challenge.component.html',
  styleUrls: ['./coding-challenge.component.scss']
})
export class CodingChallengeComponent implements OnInit {

  constructor(private _codingChallengeService: CodingChallengeService) { }

  ngOnInit() {
  }

  isSidebarExpanded(): boolean {
    return this._codingChallengeService.isSidebarExpanded;
  }
}
