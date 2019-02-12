import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as fromAnimations from './../../components/utils/animations/animations';
@Component({
    selector: 'app-search-heroes',
    animations: [fromAnimations.enterLeft('cardAnimation', 100)],
    templateUrl: 'search-heroes.component.html',
    styleUrls: ['search-heroes.component.scss']
})

export class SearchHeroesComponent implements OnInit {
    heroes: any = null;
    searching = false;
    @Output() choosenHeroeEmitter: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() { }

/**
 * receives from the child component the heroes
 */
    updateHeroes($heroes: any) {
        this.heroes = $heroes;
    }

/**
 * receives from the child component if the search is being perform
 */
    updateSearching($searching: boolean) {
        this.searching = $searching;
    }

}
