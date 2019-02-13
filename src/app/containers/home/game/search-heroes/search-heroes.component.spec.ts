import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoaderComponent } from '../utils/loader.component';
import { SearchHeroesComponent } from './search-heroes.component';

describe('SearchHeroesComponent', () => {
  let component: SearchHeroesComponent;
  let fixture: ComponentFixture<SearchHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [SearchHeroesComponent, LoaderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeroesComponent);
    component = fixture.componentInstance;
    component.heroes = ['hero1', 'hero2'];
    component.searching = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected hero when clicked (choosenHeroeEmitter)', () => {
    component.heroes = ['hero1', 'hero2'];
    component.searching = true;
    fixture.detectChanges();
    const expectedHero = 'hero1';
    let selectedHero: any;
    component.choosenHeroeEmitter.subscribe(
      (hero: any) => (selectedHero = hero)
    );
    fixture.debugElement
      .query(By.css('.card-hero'))
      .triggerEventHandler('click', null);
    expect(selectedHero).toBe(expectedHero);
  });
});
