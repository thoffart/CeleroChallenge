import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-heroes',
    templateUrl: 'search-heroes.component.html',
    styleUrls: ['search-heroes.component.scss']
})

export class SearchHeroesComponent implements OnInit {
    heroes: any = null;
    searching = false;
    constructor() { }

    ngOnInit() { }

    updateHeroes($heroes: any) {
        this.heroes = $heroes;
    }

    updateSearching($searching: boolean) {
        this.searching = $searching;
    }
}
