import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { RestaurantService } from  './restaurant.service';



@NgModule({
  imports: [HttpClientModule],
  providers: [RestaurantService]
})
export class CoreModule { }
