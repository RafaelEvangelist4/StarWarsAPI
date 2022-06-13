import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//angular material imports
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//Imports components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetComponent } from './components/planet/planet.component';
import { FilmComponent } from './components/film/film.component';
import { SpeciesComponent } from './components/species/species.component';
import { DetailComponent } from './components/people/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    PlanetComponent,
    FilmComponent,
    SpeciesComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
