import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { WorkComponent } from './work/work.component';
import { PersonComponent } from './person/person.component';
import { CityDetailComponent } from './city/city-details.component';
import { WorkDetailComponent } from './work/work-details.component';
import { PersonDetailComponent } from './person/person-details.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: 'cities',
        component: CityComponent
      },
      {
        path: 'cities/:id',
        component: CityDetailComponent
      },
      {
        path: 'works',
        component: WorkComponent
      },
      {
        path: 'works/:id',
        component: WorkDetailComponent
      },
      {
        path: 'people',
        component: PersonComponent
      },
      {
        path: 'people/:id',
        component: PersonDetailComponent
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
