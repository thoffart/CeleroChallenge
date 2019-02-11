import { Component, Input, OnInit } from '@angular/core';

import { Cell } from './../../models/cell.model';
import { Game } from './../../models/game.model';
import { Player } from './../../models/player.model';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: 'tic-tac-toe.component.html',
    styleUrls: ['tic-tac-toe.component.scss']
})

export class TicTacToeComponent implements OnInit  {
    @Input() game: Game;
    @Input() player1: Player;
    @Input() player2: Player;
    constructor() {}

    ngOnInit() {
        this.initializeGame();
        console.log(this.game);
     }

    updateCells(i: number, j: number) {
        this.game.cells[i][j].marked = true;
        console.log(this.game);
        this.verifyGame(this.game.cells);
    }

    initializeGame() {
        this.game = {
            draws: 0,
            playerTurn: this.sortPlayerFirstTurn(),
            cells: [
                [{marked: false}, {marked: false}, {marked: false}],
                [{marked: false}, {marked: false}, {marked: false}],
                [{marked: false}, {marked: false}, {marked: false}],
            ],
            status: 'playing',
        };
    }

    sortPlayerFirstTurn() {
        const initialPlayer = ((((Math.random() * 100) + 1) % 2) === 1) ? this.player1 : this.player2;
        (initialPlayer === this.player1) ? this.player2.marker = 'O' : this.player1.marker = 'O';
        initialPlayer.marker = 'X';
        return initialPlayer;
    }

    verifyGame(cells: Cell[][]) {

    }
}
