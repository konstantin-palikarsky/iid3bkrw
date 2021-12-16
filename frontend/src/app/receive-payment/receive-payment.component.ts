import {Component, OnInit} from '@angular/core';
import {Transaction} from '../objects/transaction';
import {Location} from '@angular/common';

@Component({
  selector: 'app-recieve-payment',
  templateUrl: './receive-payment.component.html',
  styleUrls: ['./receive-payment.component.scss']
})
export class ReceivePaymentComponent implements OnInit {
  public transactionDetailed: Transaction;
  public isWhitelisted: boolean;

  constructor(private location: Location) {
    this.transactionDetailed = {
      sender: 'Santa Clause',
      receiver: 'Konstantin Palikarsky',
      email: 'konstantin@gmail.com',
      amount: 100,
      id: 3,
      date: new Date(),
      isPayment: true
    };
  }

  ngOnInit(): void {
    this.isWhitelisted = false;

    this.location.onUrlChange((url, state) => {
      if (this.location.isCurrentPathEqualTo('/landing')) {
        this.isWhitelisted = true;
      } else if (this.location.isCurrentPathEqualTo('/contacts')) {
        this.isWhitelisted = true;

      } else if (this.location.isCurrentPathEqualTo('/payments')) {
        this.isWhitelisted = true;
      } else {
        this.isWhitelisted = false;
      }
    });
  }

}
