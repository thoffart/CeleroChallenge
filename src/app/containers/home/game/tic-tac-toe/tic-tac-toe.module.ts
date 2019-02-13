import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TicTacToeComponent } from './tic-tac-toe.component';

@NgModule({
    imports: [CommonModule],
    exports: [TicTacToeComponent],
    declarations: [TicTacToeComponent],
    providers: [],
})
export class TicTacToeModule { }
