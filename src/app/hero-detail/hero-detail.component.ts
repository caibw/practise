/**
 * no presentation logic in this details component,
 * simply receives a hero object through its hero property and displays it.
 * so that no any other code change expected hero as input opt in.
 */
import { Component, OnInit, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
