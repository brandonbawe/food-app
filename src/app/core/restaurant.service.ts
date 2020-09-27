import { Injectable } from '@angular/core';
import { dummyRestaurants } from '../restaurant/restaurants'

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {

  constructor() { }

  
 getRestaurants() {
  return dummyRestaurants;
}

getRestaurant(slug: string) {
  let restaurants = dummyRestaurants;
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].slug === slug) {
      return restaurants[i];
    }
  }
  return '{ code: "404", message: "Resource not found"}';
}

}
