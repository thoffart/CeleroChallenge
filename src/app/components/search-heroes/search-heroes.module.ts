import { LoaderComponent } from './../utils/loader.component';
import { CardHeroesModule } from './../card-heroes/card-heroes.module';
import { SearchBarModule } from './../search-bar/search-bar.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchHeroesComponent } from './search-heroes.component';

@NgModule({
    imports: [CommonModule, SearchBarModule, CardHeroesModule],
    exports: [SearchHeroesComponent],
    declarations: [SearchHeroesComponent, LoaderComponent],
    providers: [],
})
export class SearchHeroesModule { }
