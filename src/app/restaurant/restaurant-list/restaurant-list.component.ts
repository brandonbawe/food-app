import { Component, OnInit } from '@angular/core';
import { dummyRestaurants } from '../restaurants';
import { RestaurantService } from '../../core/restaurant.service';
import { Title } from "@angular/platform-browser";



@Component({
 selector: 'fapp-restaurant-list',
 templateUrl: './restaurant-list.component.html',
 styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

 public restaurants: any[] = [];

 constructor(private restaurantService: RestaurantService, private title: Title) {
  this.restaurants = restaurantService.getRestaurants();
}

 ngOnInit(): void {
  this.title.setTitle("Restaurants");
 }

}
