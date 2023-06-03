import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class InvalidInputService {
  private eventSubject = new Subject<any>();

  public event$ = this.eventSubject.asObservable();

  emitInvalidInput(data: boolean) {
    this.eventSubject.next(data);
  }
}