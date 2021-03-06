import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {PaymentHistoryComponent} from './payment-history/payment-history.component';
import {PaymentComponent} from './payment/payment.component';
import {RequestPaymentComponent} from './receive-payment-landing/receive-payment-landing';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginPageComponent} from './login-page/login-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: LoginPageComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'send-payment/:email', component: PaymentComponent},
  {path: 'receive-payment/:email', component: RequestPaymentComponent},
  {path: 'send-payment', component: PaymentComponent},
  {path: 'receive-payment', component: RequestPaymentComponent},
  {path: 'payments', component: PaymentHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
