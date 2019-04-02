/**
 * This file replaces mock-heroes to simulate a data server, which is now safe to delete.
 */
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@NgModule({
    declarations: [],
    exports: [],
    imports: [HttpClientModule,
              HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)]
})

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    constructor() { }

    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;

    }
}
