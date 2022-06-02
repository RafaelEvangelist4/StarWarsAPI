import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'home', component: PeopleComponent },
  {path:'people', component: PeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
