import { Component, Output, EventEmitter } from '@angular/core';
import { InvalidInputService } from '../services/invalidInputService.injectable';
import { InputChangeService } from '../services/inputChangeService.injectable';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  value: number = 0;

  cellClasses: Array<string> = ['cell'];

  isInvalid: boolean = false;

  constructor(private invalidInputService: InvalidInputService, private inputChangeService: InputChangeService) {}

  ngOnInit() {}

  onInput(event: any) {
    const inputValue = event.target.value.trim();

    this.removeErrorClass();
    this.removeEmptyClass();

    // Check if input is empty
    if (inputValue === '') {
      this.cellClasses.push('empty');
      this.value = 0;
      this.inputChangeService.emitInputChange(this.value);
      this.emitCellValidition(false);
      return;
    }

    // Check if input is a number and valid
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 9) {
      this.cellClasses.push('error');
      this.emitCellValidition(true);
      return;
    }

    // Input is a valid number
    
    // Check if value is 0
    if (inputValue === 0) {
      this.cellClasses.push('empty');
    }
    
    this.value = inputValue;
    this.inputChangeService.emitInputChange(this.value);
    this.emitCellValidition(false);
    // this.valueChange.emit(this.value);
  }

  emitCellValidition(shouldInvalid: boolean) {
    if(this.isInvalid !== shouldInvalid) {
      this.isInvalid = shouldInvalid;
      this.invalidInputService.emitInvalidInput(shouldInvalid);
    }
  }

  removeErrorClass() {
    const errorIndex = this.cellClasses.indexOf('error');
    if (errorIndex > -1) {
      this.cellClasses.splice(errorIndex, 1);
    }
  }

  removeEmptyClass() {
    const emptyIndex = this.cellClasses.indexOf('empty');
    if (emptyIndex > -1) {
      this.cellClasses.splice(emptyIndex, 1);
    }
  }

}
