import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasificationComponent } from './views/clasification/clasification.component';
import { MainComponent } from './views/main/main.component';
import { TeamComponent } from './views/team/team.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'clasification/:id', component: ClasificationComponent },
  { path: 'team/:id', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
