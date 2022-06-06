import { PlanetComponent } from './components/planet/planet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './components/people/people.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', component: NavbarComponent },
  { path:'people', component: PeopleComponent },
  { path: 'planet', component: PlanetComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
