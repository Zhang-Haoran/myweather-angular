import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private subject = new BehaviorSubject<any>(0);
  // Subject is a special type of Observable that allows values to be multicast to many Observers
  // A BehaviorSubject holds one value.
  // BehaviourSubject will return the initial value or the current value on Subscription
  // A Subject doesn't hold a value.
  // it triggers only on .next(value) call and return/output the value
  public storageObserver = new Observable<any>();

  constructor() {}

  add(key: any, value: any) {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, value);
      this.subject.next('added');
      return true;
    } else {
      return false;
    }
  }

  remove(key: any) {
    if (localStorage.getItem(key) === null) {
      return false;
    } else {
      localStorage.removeItem(key);
      this.subject.next('removed');
      return true;
    }
  }

  get(key: any) {
    if (localStorage.getItem(key) === null) {
      return false;
    } else {
      return localStorage.getItem(key);
    }
  }

  update(key: any, value: any) {
    if (localStorage.getItem(key) === null) {
      return false;
    } else {
      localStorage.setItem(key, value);
      //To feed a new value to the Subject, just call next(theValue), and it will be multicasted to the Observers registered to listen to the Subject.
      this.subject.next('updated');
      return value;
    }
  }

  list(): Observable<any> {
    this.storageObserver = this.subject.asObservable();
    return this.storageObserver;
  }
}
