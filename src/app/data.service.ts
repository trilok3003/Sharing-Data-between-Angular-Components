import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  message = new BehaviorSubject('default message');
  message$ = this.message.asObservable();
  constructor() {}
  changeMessage(message: string) {
    this.message.next(message);
  }
}
