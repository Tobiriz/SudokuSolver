import { Component } from '@angular/core';
import { InvalidInputService } from './services/invalidInputService.injectable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [InvalidInputService],
})
export class AppComponent {
  title = 'SudokuSolver';

  invalidCells: number = 0;

  notice: String = "";

  constructor(private invalidInputService: InvalidInputService) {}

  ngOnInit() {
    this.invalidInputService.event$.subscribe((data: any) => {
      if (typeof data === 'boolean') {
        if (data) {
          this.invalidCells++;
        } else {
          this.invalidCells = this.invalidCells > 0 ? this.invalidCells -1 : 0;
        }
        this.invalidCellsNotice();
      }
    });
  }

  invalidCellsNotice() {
    console.log(this.invalidCells)
    if (this.invalidCells > 0) {
      this.notice = "Invalid input (" + this.invalidCells + " cell(s))";
    } else {
      this.notice = "";
    }
  }

  clear() {
    console.log('clear');
  }

  solve() {
    console.log('solve');
  }
}
