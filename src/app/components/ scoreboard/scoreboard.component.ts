import { Player } from './../../models/player.model';
import { Component, OnInit, Input } from '@angular/core';

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
