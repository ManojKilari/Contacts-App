import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  template: `<div [ngClass]="{'backdrop': backDropShow === true,
              null: backDropShow === false}"
              (click)="closeBackDropHandler($event)"></div>`,
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent {

  @Input() backDropShow;
  @Output() sendBackDropClose = new EventEmitter<boolean>();

  closeBackDropHandler(event) {
    // this.backDropShow = false;
    this.sendBackDropClose.emit(false);
  }
}
