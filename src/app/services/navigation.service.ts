import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _activeTabs$ = new BehaviorSubject<string[]>([]);

  get activeTabs$(): Observable<string[]> {
    return this._activeTabs$.asObservable();
  }

  public setActiveTabs(subTab: string): void {
    const url = subTab.split('/');
    url.shift();
    this._activeTabs$.next(url);
  }

}
