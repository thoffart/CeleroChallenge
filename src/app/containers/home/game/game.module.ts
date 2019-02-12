import { LocalStorageService } from './../../../services/local-storage.service';
import { FinishedGameModule } from './../../../components/finished-game/finished-game.module';
import { ScoreboardModule } from './../../../components/ scoreboard/scoreboard.module';
import { TicTacToeModule } from './../../../components/tic-tac-toe/tic-tac-toe.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchHeroesModule } from './../../../components/search-heroes/search-heroes.module';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';

@NgModule({
    imports: [CommonModule, GameRoutingModule, SearchHeroesModule, TicTacToeModule, ScoreboardModule, FinishedGameModule],
    exports: [GameComponent],
    declarations: [GameComponent],
    providers: [LocalStorageService],
})
export class GameModule { }
