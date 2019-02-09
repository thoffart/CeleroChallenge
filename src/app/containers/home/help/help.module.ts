import { HelpRoutingModule } from './help-routing.module';
import { NgModule } from '@angular/core';

import { HelpComponent } from './help.component';

@NgModule({
    imports: [HelpRoutingModule],
    exports: [HelpComponent],
    declarations: [HelpComponent],
    providers: [],
})
export class HelpModule { }
