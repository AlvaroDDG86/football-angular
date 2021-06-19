import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingComponent } from './views/standing/standing.component';
import { MainComponent } from './views/main/main.component';
import { MatchComponent } from './views/match/match.component';
import { TeamComponent } from './views/team/team.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'standing/:id', component: StandingComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'match/:id', component: MatchComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
