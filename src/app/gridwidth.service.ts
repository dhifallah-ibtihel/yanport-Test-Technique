import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GridwidthService {

  private messageSource = new BehaviorSubject<[Number,Number]>([0,0]);
  public currentmessage = this.messageSource.asObservable() ;
  constructor() { }
  changeMessage(message: [Number,Number]){
   this.messageSource.next(message)
  }}
