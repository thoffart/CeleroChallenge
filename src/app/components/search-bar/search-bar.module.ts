import { HeroesService } from './../../services/heroes.service';
import { CommonModule } from '@angular/common';
import { CardHeroesModule } from './../card-heroes/card-heroes.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [SearchBarComponent],
    declarations: [SearchBarComponent],
    providers: [HeroesService],
})
export class SearchBarModule { }
