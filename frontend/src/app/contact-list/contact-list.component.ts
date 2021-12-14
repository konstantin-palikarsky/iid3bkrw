import {Component, OnInit} from '@angular/core';
import {Contact} from '../objects/contact';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: Array<Contact>;
  public filteredContacts: Array<Contact>;
  public edit = true;
  public contactName = '';
  public contactMail = '';
  public filter = '';

  display = 'none';

  constructor() {
    this.contacts = new Array<Contact>();
    this.filteredContacts = new Array<Contact>();

    for (let i = 0; i < 10; i++) {
      const contact = {
        name: 'Santa Claus' + i,
        email: 'santa.claus@gmail.com' + i,
        id: i
      };


      this.contacts.push(contact);
      this.filteredContacts.push(contact);
    }


  }


  ngOnInit(): void {
  }

  public filterContacts(){
    if(this.filter === ''){
      this.filteredContacts = this.contacts;
    }
    else{
      this.filteredContacts = this.contacts.filter(contact => contact.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1);
    }
  }

  public editContact(id: number) {
    this.edit = true;
    this.contactMail = this.contacts[id].email;
    this.contactName = this.contacts[id].name;
  }

  public addContact() {
    this.edit = false;
    this.contactMail = '';
    this.contactName = '';
  }
}
