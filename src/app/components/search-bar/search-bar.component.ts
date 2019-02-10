import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap, map, switchMap, pluck } from 'rxjs/operators';

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

    ngOnInit() {
        this.searchForm = this.fb.group({
            heroName: new FormControl('', [Validators.required]),
        });
        this.onFormValueChanges();
    }

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

    private notHasLenght = (heroName: string): void => {
        if (heroName.length < 1)  {
            this.searchingEmitter.emit(false);
            this.heroesEmitter.emit(null);
        }
    }

    private startSearching = (): void => {
        this.searchingEmitter.emit(true);
        this.heroesEmitter.emit(null);
    }
}
