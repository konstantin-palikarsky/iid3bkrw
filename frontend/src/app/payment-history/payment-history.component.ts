import {Component, OnInit} from '@angular/core';
import {Transaction} from '../objects/transaction';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  public transactions: Array<Transaction>;
  public transactionDetailed: Transaction;
  public filteredTransactions: Array<Transaction>;
  public filter: string;

  constructor() {
    let transaction;
    this.transactions = new Array<Transaction>();
    this.filteredTransactions = new Array<Transaction>();


    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        transaction = {
          sender: 'Current User',
          receiver: 'Good Kid' + i,
          email: 'GoodKid' + i + '@gmail.com',
          amount: i + 100,
          id: i,
          date: new Date(),
          isPayment: true
        };
      } else {
        transaction = {
          sender: 'Good Kid' + i,
          receiver: 'Current User',
          email: 'GoodKid' + i + '@gmail.com',
          amount: i + 100,
          id: i,
          date: new Date(),
          isPayment: false
        };
      }

      this.transactions.push(transaction);
      this.filteredTransactions.push(transaction);
    }

  }

  ngOnInit(): void {
  }

  public filterTransactions() {
    if (this.filter === '') {
      this.filteredTransactions = this.transactions;
    } else {
      this.filteredTransactions =
        this.transactions.filter(transaction => {
          if (transaction.isPayment) {
            return transaction.receiver.toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
          } else {
            return transaction.sender.toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
          }
        });
    }
  }
}
