
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScoreboardModule } from './ scoreboard/scoreboard.module';
import { LocalStorageService } from './../../../services/local-storage.service';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SearchHeroesModule } from './search-heroes/search-heroes.module';
import { TicTacToeModule } from './tic-tac-toe/tic-tac-toe.module';
import { FinishedGameModule } from './finished-game/finished-game.module';

@NgModule({
    imports: [CommonModule, GameRoutingModule, SearchHeroesModule, TicTacToeModule, ScoreboardModule, FinishedGameModule],
    exports: [GameComponent],
    declarations: [GameComponent],
    providers: [LocalStorageService],
})
export class GameModule { }
