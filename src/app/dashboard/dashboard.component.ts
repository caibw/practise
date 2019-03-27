/**
 * This class very similar to the HeroesComponent class.
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];    //It defines a heroes array property.

    constructor(private heroService: HeroService) { }   //The constructor expects Angular to inject the HeroService into a private heroService property.

    ngOnInit() {
        this.getHeroes();   //The ngOnInit() lifecycle hook calls getHeroes.
    }

    getHeroes(): void {
        this.heroService.getHeroes2().subscribe(heroes => this.heroes = heroes.slice(0, heroes.length));
    }
}

