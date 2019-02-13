import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScoreboardComponent } from './scoreboard.component';

@NgModule({
    imports: [CommonModule],
    exports: [ScoreboardComponent],
    declarations: [ScoreboardComponent],
    providers: [],
})
export class ScoreboardModule { }
