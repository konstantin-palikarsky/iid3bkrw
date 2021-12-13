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
  public edit = true;
  public contactName = '';
  public contactMail = '';

  display = 'none';

  constructor() {
    this.contacts = new Array<Contact>();

    for (let i = 0; i < 10; i++) {
      const contact = {
        name: 'Santa Claus' + i,
        email: 'santa.claus@gmail.com' + i,
        id: i
      };


      this.contacts.push(contact);
    }


  }

  ngOnInit(): void {
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
