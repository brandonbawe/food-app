import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component'
import { RestaurantDetailComponent} from './restaurant/restaurant-detail/restaurant-detail.component'


const routes: Routes = [
  { path: 'home', component:HomeComponent },
 { path: 'restaurants', component: RestaurantComponent},
 { path: 'restaurants/:id',      component: RestaurantDetailComponent },
 { path: '404', component: PageNotFoundComponent},
 {
   path: 'sampleURL',
   component: AppComponent,
   data: { title: 'Sample Title Passed' }
 },
 { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
