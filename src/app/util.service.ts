import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  dateReadable(date) {
  //  console.log(date)
    return moment(date).format('Do MMM YYYY hh:mma')
  }

}
