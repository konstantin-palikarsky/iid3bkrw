import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {PaymentHistoryComponent} from './payment-history/payment-history.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RecievePaymentComponent} from './recievePayment/recievePayment.component';
import {CreatePaymentComponent} from './createPayment/createPayment.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: LoginPageComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'payments', component: PaymentHistoryComponent},
  {path: 'recieve', component: RecievePaymentComponent},
  {path: 'create', component: CreatePaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
