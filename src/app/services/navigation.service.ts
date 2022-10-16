import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _activeTab$ = new BehaviorSubject<string>('');
  private _activeSubTab$ = new BehaviorSubject<string[]>([]);

  get activeTab$(): Observable<string> {
    return this._activeTab$.asObservable();
  }

  get activeSubTab$(): Observable<string[]> {
    return this._activeSubTab$.asObservable();
  }

  public setActiveTabs(subTab: string): void {
    const url = subTab.split('/');
    url.shift();
    if(url.length > 0) {
      this._activeTab$.next(url[0]);
      this._activeSubTab$.next(url);
    }
  }

}
