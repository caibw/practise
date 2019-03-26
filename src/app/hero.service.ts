import { Injectable } from '@angular/core';
/**
 * there are 3 way to get data from remote server have an asynchronous signature :
 * 1.take a callback. 
 * 2.return a Promise.
 * 3.return an Observable.  => currently using 3rd way to get asynchronous signature. 
 */
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//This is a typical "service-in-service" scenario: 
import { MessageService } from './message.service';

/**
 * @Injectable() decorator make the class as dependency injection. Other component with @Component() decorator.
 * 
 * the HeroService is registered as the provider of this service.
 * 
*/
@Injectable({
    /**
        provide the service at the root level, 
        it means creates a single, 
        shared instance of HeroService and injects into any class
    */
    providedIn: 'root'
})
export class HeroService {
    /**
     * the constructor with a parameter that declares a private messageService property. 
     * Angular will inject the singleton MessageService into that property when it creates the HeroService.
     */
    constructor(private messageService: MessageService) { }

    // return hero array with Hero[] like as local server get data immediately.
    getHeroes(): Hero[] {
        return HEROES;
    }

    // return heros like as remote server to make sure wait for the Observable to emit the array of heroes
    getHeroes2(): Observable<Hero[]> {
        return of(HEROES);  //of(HEROES) returns an Observable<Hero[]> the array of mock heroes.
    }

    getHeroes3(): Observable<Hero[]> {
        // send the message after fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}



