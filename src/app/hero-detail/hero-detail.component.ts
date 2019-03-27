/**
 * no presentation logic in this details component,
 * simply receives a hero object through its hero property and displays it.
 * so that no any other code change expected hero as input opt in.
 */
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    /**
        * The hero property must be an Input property to forbid binding by outer components
        * The input property is bound to a DOM property in the template. 
    */
    @Input() hero: Hero;
    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    /**
     * The route.snapshot: is a static image of the route information shortly after the component was created.
     * The paramMap: is a dictionary of route parameter values extracted from the URL. 
     */
    getHero(): void {
        //the JavaScript (+) operator converts the string to a number
        const id = +this.route.snapshot.paramMap.get('id'); //get id from click event
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);   //get hero by id 
    }

    goBack(): void {
        this.location.back();
    }


}
