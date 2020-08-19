import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();


  constructor() { }

  changeMessage(chat: Chat): void {
    this.messageSource.next(chat);
  }
}
