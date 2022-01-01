import { Component, OnInit, Input, Output,
   OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { Subscription } from 'rxjs/Subscription';

import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {

    contactList: Contact[] = [];

  contactServObj: ContactDataService;


  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;
  }


  ngOnInit() {
    this.contactList = this.contactServObj.getContacts();
    // console.log('ngOnInit called!');
  }

  fetchUpdatedList(){
    this.contactList = this.contactServObj.getContacts(); 
  }
}