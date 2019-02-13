import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from 'src/app/components/utils/loader.component';

import { CardHeroesModule } from './../card-heroes/card-heroes.module';
import { SearchBarModule } from './../search-bar/search-bar.module';
import { SearchHeroesComponent } from './search-heroes.component';

@NgModule({
    imports: [CommonModule, SearchBarModule, CardHeroesModule],
    exports: [SearchHeroesComponent],
    declarations: [SearchHeroesComponent, LoaderComponent],
    providers: [],
})
export class SearchHeroesModule { }
