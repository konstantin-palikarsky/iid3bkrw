import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactListComponent} from './contact-list/contact-list.component';
import {HeaderComponent} from './header/header.component';
import {PaymentHistoryComponent} from './payment-history/payment-history.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { PaymentComponent } from './payment/payment.component';
import { RequestPaymentComponent } from './receive-payment/receive-payment-landing';
import {ReceivePaymentComponent} from './receive-payment/receive-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    HeaderComponent,
    PaymentHistoryComponent,
    LandingPageComponent,
    LoginPageComponent,
    PaymentComponent,
    RequestPaymentComponent,
    ReceivePaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
