import { Injectable } from '@angular/core';

@Injectable()
export class CodingChallengeService {

  constructor() { }

  private _isSidebarExpanded: boolean = true;

  toggleSidebar(): void {
    this._isSidebarExpanded = !this._isSidebarExpanded;
  }

  get isSidebarExpanded(): boolean {
    return this._isSidebarExpanded;
  }

}
