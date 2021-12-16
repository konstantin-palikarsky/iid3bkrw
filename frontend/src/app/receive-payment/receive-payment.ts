import { Component, OnInit } from '@angular/core';
import {Transaction} from '../objects/transaction';

@Component({
  selector: 'app-recieve-payment',
  templateUrl: './receive-payment.html',
  styleUrls: ['./receive-payment.scss']
})
export class ReceivePayment implements OnInit {
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
