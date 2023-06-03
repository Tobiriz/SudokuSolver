import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class InputChangeService {
  private eventSubject = new Subject<any>();

  public event$ = this.eventSubject.asObservable();

  emitInputChange(data: number) {
    this.eventSubject.next(data);
  }
}