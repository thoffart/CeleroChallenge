import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Player } from 'src/app/models/player.model';

import { Game } from './../../../models/game.model';
import { LocalStorageService } from './../../../services/local-storage.service';
import * as fromAnimations from './../../../components/utils/animations/animations';
@Component({
    selector: 'app-game',
    animations: [fromAnimations.enterComponent('componentAnimation')],
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss']
})

export class GameComponent implements OnInit, OnDestroy {
    player1: Player;
    player2: Player;
    game: Game;
    constructor(private localStorageService: LocalStorageService) { }

/**
 * start the game status anf verify if there is already any data
 */
    ngOnInit() {
        this.game = {
            status: 'not started',
        };
        this.checkGameData();
    }

/**
 * clear the local storage and save the new data
 */
    ngOnDestroy() {
        this.localStorageService.clearStore().subscribe(() => {});
        this.localStorageService.setItem('game', this.game).subscribe();
        this.localStorageService.setItem('player1', this.player1).subscribe();
        this.localStorageService.setItem('player2', this.player2).subscribe();
    }

/**
 * check if there is already a game going and patch the data into the variables
 */
    checkGameData() {
        forkJoin(
            this.localStorageService.getItem('game'),
            this.localStorageService.getItem('player1'),
            this.localStorageService.getItem('player2')
        ).pipe(
        ).subscribe(([game, player1, player2]) => {
            if (game) {
                this.game = game;
                this.player1 = player1;
                this.player2 = player2;
            }
        });
        this.localStorageService.clearStore().subscribe(() => {});
    }

/**
 * Receive the hero from the child component and update the variable
 */
    updatePlayerHero(choosenHero: any) {
        if (this.game.status === 'choosing player 1') {
            this.player1 = {
                hero: choosenHero,
                victories: 0,
            };
            this.game.status = 'choosing player 2';
        } else {
            this.player2 = {
                hero: choosenHero,
                victories: 0,
            };
            this.game.status = 'initialized';
        }
    }

/**
 * receives the game from the child component and update it
 */
    updateGame(game: Game) {
        this.game = game;
    }

/**
 * verify if the game status allows to display the game
 */
    verifyDisplayGame() {
        return ['winner', 'initialized', 'playing', 'draw'].includes(this.game.status);
    }

/**
 * verify if the game status allows to display the tic tac toe board
 */
    verifyDisplayTicTacToe() {
        return ['initialized', 'playing'].includes(this.game.status);
    }

/**
 * verify if the game status allows to display the finished game
 */
    verifyDisplayFinishedGame() {
        return ['winner', 'draw'].includes(this.game.status);
    }
}
