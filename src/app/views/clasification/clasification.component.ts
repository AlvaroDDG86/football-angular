import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, tap } from 'rxjs/operators';
import { AgGridImageComponent } from 'src/app/components/ag-grid-image/ag-grid-image.component';
import { HttpService } from 'src/app/services/http.service';
import DATA from '../../back/standings'
import { AgGridLastComponent } from '../../components/ag-grid-last/ag-grid-last.component';
import { PositionsService } from '../../services/positions.service';
import{ GlobalConstants } from '../../common/global-constants'
import { InfoLeagueService } from 'src/app/services/info-league.service';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.css']
})
export class ClasificationComponent implements OnInit {
  id: any;
  frameworkComponents = {
    agGridImage: AgGridImageComponent,
    agGridLast: AgGridLastComponent
  };
  selectedMatchDay: number;
  matchDays: any[] = [];
  shields: any[];
  league: any;
  matches: any[];

  columnDefs = [
    { headerName: '', field: 'position', width: 60, pinned: 'left',
      cellClass: params => this.positionsService.getColorPosition(params.value, this.league.code)
    },
    { headerName: 'Team', field: 'team.crestUrl', cellRenderer: 'agGridImage', pinned: 'left', width: 250 },
    { headerName: 'Points', field: 'points', width: 80,
      cellStyle: { color: 'gray', 'font-weight': 'bold'}
    },
    { headerName: 'PJ', field: 'playedGames', width: 60 },
    { headerName: 'PG', field: 'won', width: 60 },
    { headerName: 'PE', field: 'draw', width: 60 },
    { headerName: 'PP', field: 'lost', width: 60 },
    { headerName: 'GF', field: 'goalsFor', width: 60 },
    { headerName: 'GC', field: 'goalsAgainst', width: 60 },
    { headerName: 'Last 5', field: 'form', cellRenderer: 'agGridLast', width: 160 }
  ];

  rowData = [];
  constructor(private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private positionsService: PositionsService,
    private infoLeagueService: InfoLeagueService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.httpService.getStandings(params.id).pipe(
        concatMap((res: any) => {
          let day = 1
          this.matchDays = []
          do {
            this.matchDays.push({
              value: day, viewValue: `Matchday ${day}`
            })
            day++
          } while (day <= GlobalConstants.matchDays[res.competition.id]);
          this.infoLeagueService.setInfoLeague(`${res.competition.name} | ${res.competition.area.name}`)
          this.infoLeagueService.setInfoColours(null)
          this.selectedMatchDay = res.season.currentMatchday ? res.season.currentMatchday : 1;
          this.league = res.competition;
          this.rowData = res.standings[0].table
          this.shields = this.rowData.map((pos: any) => {
            const { team } = pos;
            return { team: team.id, shield: team.crestUrl }
          })
          return this.httpService.getMatches(params.id, this.selectedMatchDay)
        })
      ).pipe(
        tap(this.setShields)
      ).subscribe((res: any) => {
        this.matches = res.matches
      })
    })
  }

  rowClicked(event) {
    this.router.navigate([`/team/${event.data.team.id}`]);
  }

  currentDayChange(event: any) {
    this.httpService.getMatches(this.league.id, event).pipe(
      tap(this.setShields)
    ).subscribe(res => {
      this.matches = res.matches
    })
  }

  setShields = (res: any) => {
    res.matches.forEach(match => {
      match.awayTeam.crestUrl = this.shields.find(shield => shield.team === match.awayTeam.id).shield
      match.homeTeam.crestUrl = this.shields.find(shield => shield.team === match.homeTeam.id).shield
    })
  }
}
