import { PeopleService } from './../../service/people.service';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: People[] = [];
  displayedColumns = ['name', 'height', 'mass', 'hair_color', 'skin_color','eye_color','birth_year','gender'];
  
  constructor(private peopleService: PeopleService) { }
  
  ngOnInit(): void {
    this.getPeople(1);
    
  }
  getPeople(page: number): void{
    this.peopleService.getPeople(page)
    .subscribe(peopleList => {
      this.people = peopleList.results;
      console.log(this.people);
    });
  }
 }

