import { Game } from './../../../../models/game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-finished-game',
    templateUrl: 'finished-game.component.html'
})

export class FinishedGameComponent implements OnInit {
    @Input() game: Game;

    constructor() { }

    ngOnInit() {
        console.log(this.game);
     }

/**
 * Set the game status to initialized
 */
    playAgain() {
        this.game.status = 'initialized';
    }

/**
 * Set the game status to not started
 */
    resetGame() {
        this.game.status = 'not started';
    }

}
