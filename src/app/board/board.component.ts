import { Component } from '@angular/core';
import { InputChangeService } from '../services/inputChangeService.injectable';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [InputChangeService],
})
export class BoardComponent {

  board: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  fields: any[] = [];

  constructor(private inputChangeService: InputChangeService) {}

  ngOnInit() {
    this.inputChangeService.event$.subscribe((data: any) => {});

    this.clearFields();
  }

  clearFields() {
    this.fields = new Array(9).fill(null);
  }

  clear() {
    this.clearFields();
  }

  solve() {
    console.log('solve');
  }

}
