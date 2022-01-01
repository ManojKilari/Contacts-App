import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactComponent } from './ContactList/Contact/contact.component';
import { ContactListComponent } from './ContactList/contact-list.component';
import { AddContactComponent } from './AddContact/add-contact.component';
import { EditContactComponent } from './ContactList/Contact/EditContact/edit-contact.component';
import { SortComponent } from './SortContact/sort-contact.component';
import { ContactDataService } from './ContactData.service';
import { BackdropComponent } from './Backdrop/backdrop.component';
import { ModalComponent } from './Modal/modal.component';

const appRoutes: Routes = [
  { path: '' , component: AddContactComponent },
  { path: 'contactList', component: ContactListComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, ContactComponent, ContactListComponent, AddContactComponent, SortComponent, EditContactComponent, ModalComponent, BackdropComponent  ],
  bootstrap:    [ AppComponent ],
  providers:    [ ContactDataService ]
})
export class AppModule { }

