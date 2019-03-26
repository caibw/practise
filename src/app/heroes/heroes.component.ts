/**
 * The HeroesComponent is still a master/detail view.
 */
// import the Component symbol from the Angular core library 
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

//and annotate the component class with @Component
@Component({
    /**
     * the component's CSS element selector:
     * 1. matches the name of the HTML element.
     * 2. identifies this component within a parent component's template.
     */
    selector: 'app-heroes',

    // the location of the component's template file.
    templateUrl: './heroes.component.html',

    //the location of the component's private CSS styles
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    //Add a hero property to the HeroesComponent for a hero named "Windstorm." 
    hero = 'Windstorm';  //be replaced after class's constructor.

    hero3: Hero = {
        id: 3,
        name: 'Windstorm3'
    };

    heroes = HEROES;    //to expose HEROES array for binding.

    // get heros from hero service
    heroes4: Hero[];

    heroes5: Hero[];

    // When Angular creates a HeroesComponent, DI HeroService as instance to HeroesComponent
    constructor(private heroService: HeroService) { }

    //ngOnInit shortly after creating a component and good to put initialization logic.
    ngOnInit() {
        this.hero = 'Windstorm2';
        this.getHeroes4();  //do data flow change from HeroService to HeresComponent.
        this.getHeroes5();
    }

    getHero() {
        return this.hero;
    }

    getHero3() {
        return this.hero3;
    }

    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    selectedHero2: Hero;
    onSelect2(hero: Hero): void {
        this.selectedHero2 = hero;
    }
    getHeroes4(): void {
        //this.heroes4 = this.heroService.getHeroes();
        this.heroService.getHeroes2().subscribe(heroes => this.heroes4 = heroes);
    }
    
    selectedHero3: Hero;
    onSelect3(hero: Hero): void {
        this.selectedHero3 = hero;
    }
    getHeroes5(): void {
        this.heroService.getHeroes3().subscribe(heroes => this.heroes5 = heroes);
    }



}   
