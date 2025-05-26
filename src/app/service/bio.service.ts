import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  toCheckView  = new BehaviorSubject<boolean>(false);
  constructor() { }
}
