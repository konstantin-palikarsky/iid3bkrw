import {Component, OnInit} from '@angular/core';
import {Contact} from '../objects/contact';

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

    this.contacts = [
      {
        name: 'Santa Claus',
        email: 'santa.claus@gmail.com',
        id: 0
      },
      {
        name: 'Berke Akkaya',
        email: 'berke@gmail.com',
        id: 1
      },
      {
        name: 'Konstantin Palikarsky',
        email: 'konstantin@gmail.com',
        id: 2
      }, {
        name: 'Rumen Kolev',
        email: 'rumen@gmail.com',
        id: 3
      },
      {
        name: 'Wolfgang Koch',
        email: 'wolfgang@gmail.com',
        id: 4
      }, {
        name: 'Elizabeth Windsor',
        email: 'elizabeth@gmail.com',
        id: 5
      }, {
        name: 'Thomas Müller',
        email: 'thomas@gmail.com',
        id: 6
      },
      {
        name: 'Manuel Neuer',
        email: 'manuel@gmail.com',
        id: 7
      },
      {
        name: 'Napoleon Bonaparte',
        email: 'tallguy@gmail.com',
        id: 8
      },
      {
        name: 'Ivan Ivanovski',
        email: 'ivan@gmail.com',
        id: 9
      }];

    this.contacts.forEach((contact) => {
      this.filteredContacts.push(contact);
    });
  }


  ngOnInit(): void {
  }

  public filterContacts() {
    if (this.filter === '') {
      this.filteredContacts = this.contacts;
    } else {
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
