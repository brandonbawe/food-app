import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'fapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heading: string;
  lead: string;
  constructor (private title: Title) {
   this.heading = "FoodVerse";
   this.lead = "Come and have a taste of good food and exotic drinks at FoodVerse";
   
  }

  ngOnInit(): void {
    this.title.setTitle("FoodVerse");
  }

}
