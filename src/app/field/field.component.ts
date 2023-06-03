import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {

  cells: any[] = [];

  constructor() {}

  ngOnInit() {
    this.clearCells();
  }

  clearCells() {
    this.cells = new Array(9).fill(null);
  }


}
