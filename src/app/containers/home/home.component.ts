import { Component, OnInit } from '@angular/core';
import * as fromAnimations from './../../components/utils/animations/animations';

@Component({
    selector: 'app-home',
    animations: [fromAnimations.fadeIn],
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
