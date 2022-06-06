import { Planet } from './../../models/planet.model';
import { PlanetService } from './../../service/planet.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet: Planet[] = [];
  displayedColumns =['name', 'diameter', 'gravity', 'population', 'climate', 'terrain']

  constructor(private planetService: PlanetService ) { }

  ngOnInit(): void {
    this.getPlanet(1)
  }
  getPlanet(page: number): void{
    this.planetService.getPlanet(page)
    .subscribe(planetList => {
      this.planet = planetList.results;
      console.log(this.planet);
    });
  }

}
