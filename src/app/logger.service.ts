import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  private prefix: string;
  
  constructor() {
    this.prefix = "Общий сервис: ";
  }

  getPrefix = function(){
    return this.prefix;
  }

  emitChange(change: any) {
    this.emitChangeSource.next(this.getPrefix() + change);
  }
}
