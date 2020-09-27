import { Component } from '@angular/core';

@Component({
 selector: 'fapp-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title: string;
  lead: string;
  searchResult: boolean;
 constructor () {
   this.title = "Food App";
   this.lead = "Ordering Food, has never been easier";
   this.searchResult = false;
 }
  search() {
    this.searchResult = true;
  }
 }
