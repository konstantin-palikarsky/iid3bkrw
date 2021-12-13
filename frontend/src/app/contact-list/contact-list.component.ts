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

  display = 'none';

  constructor(private modalService: NgbModal) {
    this.contacts = new Array<Contact>();

    for (let i = 0; i < 10; i++) {
      const contact = {
        name: 'Santa Claus' + i,
        email: 'santa.claus@gmail.com' + i
      };


      this.contacts.push(contact);
    }


  }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    }, (reason) => {

    });
  }
}
