import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {PaymentHistoryComponent} from './payment-history/payment-history.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'payments', component: PaymentHistoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
