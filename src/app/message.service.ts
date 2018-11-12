import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = '';

  constructor() {
  }

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  hasMessage(): boolean {
    if (this.message !== '') {
      return true;
    } else {
      return false;
    }
  }

}
