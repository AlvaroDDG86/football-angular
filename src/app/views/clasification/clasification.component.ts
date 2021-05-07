import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { AgGridImageComponent } from 'src/app/components/ag-grid-image/ag-grid-image.component';
import { HttpService } from 'src/app/services/http.service';
import DATA from '../../back/standings'
import { AgGridLastComponent } from '../../components/ag-grid-last/ag-grid-last.component';

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
  shields: any[]

  columnDefs = [
    { headerName: '', field: 'position', width: 60, pinned: 'left',
      cellClass: params => {
        switch(true) {
          case params.value < 5:
            return 'position green';
          case params.value < 7 && params.value > 4:
            return 'position blue';
          case params.value === 7:
            return 'position orange';
          case params.value > 17:
            return 'position red';
          case params.value > 7 && params.value < 18:
            return 'position gray';
        }
      }
    },
    { headerName: 'Team', field: 'team.crestUrl', cellRenderer: 'agGridImage', pinned: 'left' },
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
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let day = 1
    do {
      this.matchDays.push({
        value: day, viewValue: `Matchday ${day}`
      })
      day++
    } while (day <= 40);
    this.activatedRoute.params.subscribe(params => {
      this.httpService.getStandings(params.id).pipe(
        concatMap((res: any) => {
          this.rowData = res.standings[0].table
          this.shields = this.rowData.map((pos: any) => {
            const { team } = pos;
            return { team: team.id, shield: team.crestUrl }
          })
          console.log(this.shields)
          return this.httpService.getMatches(params.id, res.season.currentMatchday)
        })
      ).subscribe(res => {
        console.log(res)
      })
    })
  }

  rowClicked(event) {
    this.router.navigate([`/team/${event.data.team.id}`]);
  }

}
