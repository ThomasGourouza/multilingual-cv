import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _activeTab$ = new BehaviorSubject<string>('');

  get activeTab$(): Observable<string> {
    return this._activeTab$.asObservable();
  }

  public setActiveTab(tab: string): void {
    this._activeTab$.next(tab);
  }

}
