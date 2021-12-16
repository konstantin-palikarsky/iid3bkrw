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
      sender: 'GoodKid 100',
      receiver: 'Current User',
      email: 'GoodKid' + 100 + '@gmail.com',
      amount: 100 + 100,
      id: 1,
      date: new Date(),
      isPayment: false
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
