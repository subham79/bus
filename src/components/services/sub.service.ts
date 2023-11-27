import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  dataSend = new BehaviorSubject<any>('')

  constructor() { }
}
