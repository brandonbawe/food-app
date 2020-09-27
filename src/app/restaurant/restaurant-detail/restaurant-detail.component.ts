import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/core/restaurant.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'fapp-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  public restaurant: any;

  constructor(private retaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute) { }
 

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant() {
    let slug = this.activatedRoute.snapshot.paramMap.get("id");
    this.restaurant = this.retaurantService.getRestaurant(slug);
  }
 
}
