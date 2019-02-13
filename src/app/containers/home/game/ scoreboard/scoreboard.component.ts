import { Component, Input, OnInit } from '@angular/core';

import { Player } from './../../../../models/player.model';

@Component({
    selector: 'app-scoreboard',
    templateUrl: 'scoreboard.component.html'
})

export class ScoreboardComponent implements OnInit {
    @Input() player1: Player;
    @Input() player2: Player;
    constructor() { }

    ngOnInit() { }
}
