import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLandingPage: boolean;
  public pageTitle: string;
  public pageTitles = {
    '/landing': 'Home',
    '/payments': 'Transactions',
    '/contacts': 'Contacts'
  };
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange((url, state) =>{
      this.isLandingPage = this.location.isCurrentPathEqualTo('/landing');
      this.pageTitle = this.pageTitles[this.location.path()];
    });
  }

  public goBack(){
    this.location.back();
  }
}
