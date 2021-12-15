import { Component, OnInit } from '@angular/core';
import {Transaction} from '../objects/transaction';

@Component({
  selector: 'app-recieve-payment',
  templateUrl: './recievePayment.component.html',
  styleUrls: ['./recievePayment.component.scss']
})
export class RecievePaymentComponent implements OnInit {
  public transactionDetailed: Transaction;


  constructor() {
      this.transactionDetailed = {
              sender: 'GoodKid 100',
              receiver: 'Current User',
              email: 'GoodKid' + 100 + '@gmail.com',
              amount: 100+100,
              id: 1,
              date: new Date(),
              isPayment: false
            };
    }

  ngOnInit(): void {
  }

}
