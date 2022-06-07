import { SpeciesService } from './../../service/species.service';
import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  species: Specie[] = [];
  displayedColumns = ['name','classification', 'designation', 'average_height', 'skin_colors', 'hair_colors', 'eye_colors', 'average_lifespan', 'homeworld', 'language' ];
  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.getSpecies(1);
  }

  getSpecies(page: number): void{
    this.speciesService.getSpecies(page)
    .subscribe(specieList => {
      this.species = specieList.results;
      console.log(this.species);
    });
  }
}
