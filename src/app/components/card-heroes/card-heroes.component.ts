import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-heroes',
    templateUrl: 'card-heroes.component.html',
    styleUrls: ['card-heroes.component.scss']
})

export class CardHeroesComponent implements OnInit {
    @Input() heroes: any;
    constructor() { }

    ngOnInit() { }
}
