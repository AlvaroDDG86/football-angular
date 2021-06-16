import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { InfoLeagueService } from 'src/app/services/info-league.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  id: string;
  $match: Observable<any>;
  constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private infoLeagueService: InfoLeagueService,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.$match = this.httpService.getMatch(this.id).pipe(
      tap((res: any) => {
        this.infoLeagueService.setInfoLeague(`${res.match.competition.name} | Match Day: ${res.match.matchday}`)
      })
    )
  }

}
