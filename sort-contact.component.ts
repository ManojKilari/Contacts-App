import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContactDataService } from '../ContactData.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort-contact.component.html'
})
export class SortComponent implements OnInit {
  @Output() contactListUpdate:EventEmitter<any>=new EventEmitter<any>();

  constructor(private contactServObj: ContactDataService) { }

  ngOnInit() {
  }

  onSelectChange(event) {
    console.log(event.target.value);
    // const field = event.target.value === 'default' ? null : event.target.value;
    this.contactServObj.sortContactHandler(event.target.value);
    this.contactListUpdate.emit();
  }
}
