import { NgModule } from '@angular/core';

import { CardHeroesComponent } from './card-heroes.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [CardHeroesComponent],
    declarations: [CardHeroesComponent],
    providers: [],
})
export class CardHeroesModule { }
