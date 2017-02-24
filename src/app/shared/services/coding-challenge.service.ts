import { Injectable } from '@angular/core';

@Injectable()
export class CodingChallengeService {

  private _isSidebarExpanded: boolean = true;

  constructor() { }

  toggleSidebar(): void {
    this._isSidebarExpanded = !this._isSidebarExpanded;
  }

  get isSidebarExpanded(): boolean {
    return this._isSidebarExpanded;
  }

}
