import { Component, OnInit, Input, Output } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-contact-component',
  templateUrl: './add-contact.component.html'
})
export class AddContactComponent {

  name = '';
  phone = '';
  email = '';
  organization = '';
  notes = '';
  newContact: Contact;

  contactServObj: ContactDataService;

  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    if (submittedForm.value.name !== '' && submittedForm.value.phone !== ''
    && submittedForm.value.email !== '' && submittedForm.value.organization !== '') {
      this.contactServObj.addContactHandler({name: submittedForm.value.name, phone: submittedForm.value.phone,
        email: submittedForm.value.email, organization: submittedForm.value.organization, notes: submittedForm.value.notes});
      this.name = '';
      this.phone = '';
      this.email = '';
      this.organization = '';
      this.notes = '';
    }
  }

}
