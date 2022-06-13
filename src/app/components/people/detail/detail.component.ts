import { PeopleClass } from './../../../models/people.model';
import { People } from 'src/app/models/people.model';
import { PeopleService } from './../../../service/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: number;
  people!: People;
  constructor(private route: ActivatedRoute,private router: Router,
    private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = new PeopleClass();
    this.id = this.route.snapshot.params['id'];
    
    this.peopleService.getDetailCharacter(this.id)
      .subscribe(data => {
        this.people = data;
      }, error => console.log(error));
  }

  List(){
    this.router.navigate(['people']);
  }

}
