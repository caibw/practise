import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// optional FormsModule for ngModel in two way data binding.
import { FormsModule } from '@angular/forms';

//declare each component in for application work ?
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';   //opt-in to the FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent     //Every component must be declared in exactly one NgModule.
  ],
  //imports array contains a list of external modules that the app needs
  imports: [       
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //add FormsModule to the @NgModule metadata's imports array,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
