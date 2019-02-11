import { Game } from './../../../models/game.model';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss']
})

export class GameComponent implements OnInit {
    player1: Player;
    player2: Player;
    game: Game;
    constructor() { }

    ngOnInit() {
        this.game = {
            status: 'not started',
        };
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
            this.game.status = 'playing';
        }
    }
}
