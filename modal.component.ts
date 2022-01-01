import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() importedContact;
  @Input() modalShow;
  // @Input() backDropShow;
  @Output() sendModalClose = new EventEmitter<boolean>();

  closeModalHandler(event) {
    console.log(event);
    this.sendModalClose.emit(false);
  }

}
