import { HeroesService } from './../../services/heroes.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SearchBarComponent', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;
    const testHero = ['hero1', 'hero2'];
    const heroesService = jasmine.createSpyObj('HeroesService', ['getHeroes']);
    const getHeroSpy = heroesService.getHeroes.and.returnValue( of(testHero));

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
            declarations: [ SearchBarComponent ],
            providers: [{provide: HeroesService, useValue: heroesService}]
        })
        .compileComponents();
        }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create search-bar component', () => {
        expect(component).toBeTruthy();
    });
});
