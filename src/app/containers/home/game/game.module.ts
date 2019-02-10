import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchHeroesModule } from './../../../components/search-heroes/search-heroes.module';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';

@NgModule({
    imports: [CommonModule, GameRoutingModule, SearchHeroesModule],
    exports: [GameComponent],
    declarations: [GameComponent],
    providers: [],
})
export class GameModule { }
