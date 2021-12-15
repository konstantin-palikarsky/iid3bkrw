import { Component, OnInit } from '@angular/core';
import {Transaction} from '../objects/transaction';

@Component({
  selector: 'app-recieve-payment',
  templateUrl: './recievePayment.component.html',
  styleUrls: ['./recievePayment.component.scss']
})
export class RecievePaymentComponent implements OnInit {
  public transactions: Array<Transaction>;
  public transactionDetailed: Transaction;


  constructor() {
    let transaction;
    this.transactions = new Array<Transaction>();



         transaction = {
          sender: 'Current User',
          receiver: 'Good Kid' + 1,
          email: 'GoodKid' + 100 + '@gmail.com',
          amount: 100+100,
          id: 1,
          date: new Date(),
          isPayment: false
        };
      this.transactions.push(transaction);
      this.transactionDetailed=transaction;
    }

  ngOnInit(): void {
  }

}
