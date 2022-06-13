import { DetailComponent } from './components/people/detail/detail.component';
import { FilmComponent } from './components/film/film.component';
import { PlanetComponent } from './components/planet/planet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './components/people/people.component';
import { SpeciesComponent } from './components/species/species.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', component: NavbarComponent },
  { path:'people', component: PeopleComponent },
  { path: 'planet', component: PlanetComponent},
  { path: 'film', component: FilmComponent},
  { path:'species', component: SpeciesComponent},
  { path: 'detail/:id', component: DetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
