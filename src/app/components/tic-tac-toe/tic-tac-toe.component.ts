import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { mark } from '../utils/types/mark';
import { Cell } from './../../models/cell.model';
import { Game } from './../../models/game.model';
import { Player } from './../../models/player.model';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: 'tic-tac-toe.component.html',
    styleUrls: ['tic-tac-toe.component.scss']
})

export class TicTacToeComponent implements OnInit, OnDestroy  {
    @Input() game: Game;
    @Input() player1: Player;
    @Input() player2: Player;
    @Output() gameEmitter: EventEmitter<Game> = new EventEmitter();
    constructor() {}

    ngOnInit() {
        if (this.game.status === 'initialized') {
            this.initializeGame();
        }
     }

/**
 * emits the game to the parent component, so it can saves it in the local-storage before destroying it
 */
     ngOnDestroy() {
        this.gameEmitter.emit(this.game);
     }

/**
 * initialize the game
 */
    initializeGame() {
        this.game = {
            playerTurn: this.sortPlayerFirstTurn(),
            cells: [
                [{marked: false}, {marked: false}, {marked: false}],
                [{marked: false}, {marked: false}, {marked: false}],
                [{marked: false}, {marked: false}, {marked: false}],
            ],
            status: 'playing',
            movimentsNumber: 0,
        };
    }

/**
 * sort the player who will start playing
 */
    sortPlayerFirstTurn() {
        const initialPlayer = ((((Math.floor(Math.random() * 100) + 1)) % 2) === 0) ? this.player1 : this.player2;
        (initialPlayer === this.player1) ? this.player2.marker = 'O' : this.player1.marker = 'O';
        initialPlayer.marker = 'X';
        return initialPlayer;
    }

/**
 * receive the cell that has been checked, check if a winner has occurred or there has been a tie
 */
    updateCells(i: number, j: number) {
        if (!this.game.cells[i][j].marked) {
            this.game.movimentsNumber += 1;
            this.game.cells[i][j] = {
                marked: true,
                playerMark: this.game.playerTurn.marker,
            };
            if (this.verifyVictory(this.game.cells, this.game.playerTurn.marker, i, j)) {
                this.game.playerTurn.victories += 1;
                this.game.status = 'winner';
                this.gameEmitter.emit(this.game);
            } else if (this.game.movimentsNumber === 9) {
                this.game.status = 'draw';
                this.gameEmitter.emit(this.game);
            } else {
                this.changePlayerTurn();
            }
        }
    }

/**
 * change the player's turn
 */
    changePlayerTurn() {
        (this.game.playerTurn.marker === this.player1.marker)
        ? (this.game.playerTurn = this.player2)
        : (this.game.playerTurn = this.player1);
    }

/**
 * verifies all possible conditions of victory and returns true if it happened
 */
    verifyVictory(cells: Cell[][], playerMark: mark, markedCellX: number, markedCellY: number): boolean {
        if (this.checkColumn(cells, playerMark, markedCellX, markedCellY)) {
            return true;
        } else if (this.checkLine(cells, playerMark, markedCellX, markedCellY)) {
            return true;
        } else if ((markedCellX === markedCellY) && this.checkVertical(cells, playerMark, markedCellX, markedCellY)) {
            return true;
        } else if (((markedCellX + markedCellY) === 2) && this.checkAntiVertical(cells, playerMark, markedCellX, markedCellY)) {
            return true;
        }
        return false;
    }


/**
 * verifies if the entire cell line has the same mark('X' OR 'O')
 */
    checkLine(cells: Cell[][], playerMark: mark, markedCellX: number, markedCellY: number): boolean {
        for (let i = 0; i < 3; i++) {
            if (!cells[markedCellX][i].marked || cells[markedCellX][i].playerMark !== playerMark) {
                return false;
            }
        }
        return true;
    }

/**
 * verifies if the entire cell column has the same mark('X' OR 'O')
 */
    checkColumn(cells: Cell[][], playerMark: mark, markedCellX: number, markedCellY: number): boolean {
        for (let i = 0; i < 3; i++) {
            if (!cells[i][markedCellY].marked || cells[i][markedCellY].playerMark !== playerMark) {
                return false;
            }
        }
        return true;
    }

/**
 * verifies if the entire cell vertical has the same mark('X' OR 'O')
 */
    checkVertical(cells: Cell[][], playerMark: mark, markedCellX: number, markedCellY: number): boolean {
        for (let i = 0; i < 3; i++) {
            if (!cells[i][i].marked || cells[i][i].playerMark !== playerMark) {
                return false;
            }
        }
        return true;
    }

/**
 * verifies if the entire cell anti vertical has the same mark('X' OR 'O')
 */
    checkAntiVertical(cells: Cell[][], playerMark: mark, markedCellX: number, markedCellY: number): boolean {
        for (let i = 0; i < 3; i++) {
            if (!cells[i][2 - i].marked || cells[i][2 - i].playerMark !== playerMark) {
                return false;
            }
        }
        return true;
    }
}
