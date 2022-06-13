import { PeopleService } from './../../service/people.service';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  displayedColumns = ['name', 'height', 'mass', 'hair_color', 'skin_color','eye_color','birth_year','gender', 'action'];
  characterList!: Observable<People[]>;
  constructor(private peopleService: PeopleService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAllCharacter();
    
  }

  getAllCharacter(){
    this.characterList = this.peopleService.getAllCharacter();
  } 
  
  characterDetail(id: number){
    this.router.navigate(['/detail', id]);
  }
 }

