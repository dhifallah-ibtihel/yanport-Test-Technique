import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class IntialPositionService {
  private messageSource = new BehaviorSubject<string>("");
  public currentmessage = this.messageSource.asObservable() ;
  
  constructor() { }
  changeMessage(message: string){
   this.messageSource.next(message);
  
  }
}
