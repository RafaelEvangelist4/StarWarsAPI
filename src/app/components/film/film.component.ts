import { Films } from './../../models/film.model';
import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: Films[] = [];
  displayedColumns = ['title', 'episode_id', 'director', 'producer', 'opening_crawl']
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms(1);
  }

  getFilms(page: number): void{
    this.filmService.getFilms(page)
    .subscribe(filmList => {
      this.film = filmList.results;
      console.log(this.film);
    });
  }

}
