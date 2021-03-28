import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private node: BehaviorSubject<Theme> = new BehaviorSubject(Theme.dark);
  constructor() { }

  get mode$() {
    return this.node.asObservable();
  }

  toggleMode() {
    if (this.node.value === Theme.dark) {
      this.node.next(Theme.light);
    } else {
      this.node.next(Theme.dark);
    }
  }

}