import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card-heroes',
    templateUrl: 'card-heroes.component.html',
    styleUrls: ['card-heroes.component.scss']
})

export class CardHeroesComponent implements OnInit {
    @Input() hero: any;
    constructor() { }

    ngOnInit() { }
}
