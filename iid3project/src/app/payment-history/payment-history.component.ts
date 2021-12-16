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


    this.transactions = [{
      sender: 'Current User',
      receiver: 'Santa Clause',
      email: 'santa@gmail.com',
      amount: 30,
      id: 0,
      date: new Date(),
      isPayment: true
    }, {
      sender: 'Napoleon Bonaparte',
      receiver: 'Current User',
      email: 'tallguy@gmail.com',
      amount: 100,
      id: 1,
      date: new Date(),
      isPayment: false
    }, {
      sender: 'Manuel Neuer',
      receiver: 'Manuel Neuer',
      email: 'manuel@gmail.com',
      amount: 100,
      id: 2,
      date: new Date(),
      isPayment: true
    }, {
      sender: 'Napolean Bonaparte',
      receiver: 'Current User',
      email: 'tallguy@gmail.com',
      amount: 200,
      id: 2,
      date: new Date(),
      isPayment: false
    }, {
      sender: '',
      receiver: 'Konstantin Palikarsky',
      email: 'konstantin@gmail.com',
      amount: 100,
      id: 3,
      date: new Date(),
      isPayment: true
    }, {
      sender: 'Ivanov Ivanovski',
      receiver: 'Current User',
      email: 'ivan@gmail.com',
      amount: 300,
      id: 4,
      date: new Date(),
      isPayment: false
    }, {
      sender: '',
      receiver: 'Santa Clause',
      email: 'santa@gmail.com',
      amount: 489,
      id: 5,
      date: new Date(),
      isPayment: true
    }, {
      sender: 'Napoleon Bonaparte',
      receiver: '',
      email: 'tallguy@gmail.com',
      amount: 330,
      id: 6,
      date: new Date(),
      isPayment: false
    }, {
      sender: 'User',
      receiver: 'Manuel Neuer',
      email: 'manuel@gmail.com',
      amount: 286,
      id: 7,
      date: new Date(),
      isPayment: true
    }];


    this.transactions.forEach((contact) => {
      this.filteredTransactions.push(contact);
    });

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
