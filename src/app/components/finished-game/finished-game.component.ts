import { Player } from './../../models/player.model';
import { Game } from './../../models/game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-finished-game',
    templateUrl: 'finished-game.component.html'
})

export class FinishedGameComponent implements OnInit {
    @Input() game: Game;
    @Input() player1: Player;
    @Input() player2: Player;
    constructor() { }

    ngOnInit() { }

    playAgain() {
        this.game.status = 'initialized';
    }

    resetGame() {
        this.game.status = 'not started';
    }

}
