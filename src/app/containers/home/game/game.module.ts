import { GameRoutingModule } from './game-routing.module';
import { NgModule } from '@angular/core';

import { GameComponent } from './game.component';

@NgModule({
    imports: [GameRoutingModule],
    exports: [GameComponent],
    declarations: [GameComponent],
    providers: [],
})
export class GameModule { }
