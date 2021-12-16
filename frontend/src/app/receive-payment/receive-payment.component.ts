import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';

@Component({
  selector: 'app-receive-payment',
  templateUrl: './receive-payment.component.html',
  styleUrls: ['./receive-payment.component.scss']
})
export class RequestPaymentComponent implements OnInit {
  directPayment: Payment;
  sharedPaymentName: string;
  sharedTotal: number;
  sharedPayment: Payment[];
  correctAmount;
  constructor() { }

  ngOnInit(): void {
    this.directPayment = {
      email: '',
      amount: 0
    };
    this.sharedTotal = 0;
    this.sharedPayment = [{
      email: '',
      amount: 0
    }];
    this.correctAmount = false;
  }

  addRecipient() {
    this.sharedPayment.push({
      email: '',
      amount: 0
    });
  }

  amountChanged() {
    let paymentSum:number = this.sharedPayment.reduce((acc, cur) => acc + cur.amount, 0); 
    this.correctAmount = (paymentSum === this.sharedTotal) && this.sharedTotal > 0;
  }

  splitEvenly() {
    const n = this.sharedPayment.length;
    const total = this.sharedTotal * 100;
    let mod = total % n;
    const split = Math.floor(total/n) / 100;
    this.sharedPayment.forEach((payment) => {
      if(mod-- > 0) {
        payment.amount = split + 0.01;
      }
      else {
        payment.amount = split;
      }
    });
    let paymentSum:number = this.sharedPayment.reduce((acc, cur) => acc + cur.amount, 0); 
    this.correctAmount = (paymentSum === this.sharedTotal) && this.sharedTotal > 0;
  }
}
