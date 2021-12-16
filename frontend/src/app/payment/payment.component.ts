import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() email: string;
  amount: number;
  test: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.amount = 0;
    console.log(this.email);
    this.test = this.route.params.subscribe(params => {
      this.email = params['email']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

}
