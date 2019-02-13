import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap, tap } from 'rxjs/operators';

import { HeroesService } from './../../../../services/heroes.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
    searchForm: FormGroup;
    heroes: any = null;
    @Output() heroesEmitter: EventEmitter<any> = new EventEmitter();
    @Output() searchingEmitter: EventEmitter<boolean> = new EventEmitter();
    constructor(private heroesService: HeroesService, private fb: FormBuilder) { }

/**
 * create the form with formBuilder
 */
    ngOnInit() {
        this.searchForm = this.fb.group({
            heroName: new FormControl('', [Validators.required]),
        });
        this.onFormValueChanges();
    }

/**
 * Check for changes in the form values ​​and realize an api search through heroService
 */
    onFormValueChanges() {
        this.searchForm.valueChanges.pipe(
            debounceTime(500),
            map(formValues => formValues.heroName),
            distinctUntilChanged(),
            tap(this.notHasLenght),
            filter((heroName: string) => heroName.length > 1),
            tap(this.startSearching),
            switchMap((heroName: string) => this.heroesService.getHeroes(heroName).pipe(
                pluck('data', 'results')
            ))
        ).subscribe(heroes => {
            this.heroesEmitter.emit(heroes);
        });
    }

/**
 * Verify if the length of the typed name is greater than one to perform the search
 */
    private notHasLenght = (heroName: string): void => {
        if (heroName.length < 1)  {
            this.searchingEmitter.emit(false);
            this.heroesEmitter.emit(null);
        }
    }

/**
 * informs the parent component that the search is being performed
 */
    private startSearching = (): void => {
        this.searchingEmitter.emit(true);
        this.heroesEmitter.emit(null);
    }
}
