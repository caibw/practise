/**
 *  the best practice is to load and configure the router in a separate
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


/**
 * Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
 * e.g:  
 *      http://localhost:4200//heroes -> HeroesComponent
 */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
    declarations: [],
    /**
     * Add an @NgModule.exports array.
     * Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
     */
    exports: [RouterModule],

    /**
     * 1. generally don't declare components in a routing module.
     * 2. add RouterModule to the @NgModule.imports array 
     *    in order to initialize the router and start it listening for browser location changes.
     */
    imports: [RouterModule.forRoot(routes)]   
}) 

export class AppRoutingModule { }
