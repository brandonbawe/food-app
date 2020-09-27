import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    HomeComponent,
    RestaurantDetailComponent,
    RestaurantComponent,
    SearchResultComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
