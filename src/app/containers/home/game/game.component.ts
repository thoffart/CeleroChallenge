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

    ngOnInit() {
        this.game = {
            status: 'not started',
        };
        this.checkGameData();
    }

    ngOnDestroy() {
        this.localStorageService.clearStore().subscribe(() => {});
        this.localStorageService.setItem('game', this.game).subscribe();
        this.localStorageService.setItem('player1', this.player1).subscribe();
        this.localStorageService.setItem('player2', this.player2).subscribe();
    }

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

    updateGame(game: Game) {
        this.game = game;
    }

    verifyDisplayGame() {
        return ['winner', 'initialized', 'playing', 'draw'].includes(this.game.status);
    }
    verifyDisplayTicTacToe() {
        return ['initialized', 'playing'].includes(this.game.status);
    }

    verifyDisplayFinishedGame() {
        return ['winner', 'draw'].includes(this.game.status);
    }
}
