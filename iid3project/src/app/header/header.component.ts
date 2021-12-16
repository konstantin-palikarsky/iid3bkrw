import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLandingPage: boolean;
  public isAuthPage: boolean;
  public pageTitle: string;
  public pageTitles = {
    '/auth': 'Login',
    '/landing': 'Home',
    '/payments': 'Transactions',
    '/contacts': 'Contacts',
    '/send-payment': 'Send',
    '/receive-payment': 'Request',
  };

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.location.onUrlChange((url, state) => {
      this.isLandingPage = false;
      this.isLandingPage = this.location.isCurrentPathEqualTo('/landing');
      this.isAuthPage = this.location.isCurrentPathEqualTo('/auth');
      this.pageTitle = this.pageTitles[this.location.path()];
    });
  }

  public goBack() {
    this.location.back();
  }
}
