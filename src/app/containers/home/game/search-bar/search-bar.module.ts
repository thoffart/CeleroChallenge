import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesService } from './../../../../services/heroes.service';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [SearchBarComponent],
    declarations: [SearchBarComponent],
    providers: [HeroesService],
})
export class SearchBarModule { }
