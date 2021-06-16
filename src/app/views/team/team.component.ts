import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ColorsService } from 'src/app/services/colors.service';
import { FlagsService } from 'src/app/services/flags.service';
import { HttpService } from 'src/app/services/http.service';
import { InfoLeagueService } from 'src/app/services/info-league.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  $team: Observable<any>;
  id: any;
  squad: any[];

  constructor(private httpService: HttpService,
      private flagsService: FlagsService,
      private activatedRoute: ActivatedRoute,
      private colorsService: ColorsService,
      private infoLeagueService: InfoLeagueService,
      private location: Location) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.$team = this.httpService.getTeam(this.id).pipe(
      tap(
        (res: any) => {
          this.infoLeagueService.setInfoLeague(`${res.name} | ${res.founded}`)
          this.infoLeagueService.setInfoColours(this.colorsService.getColors(res))
          this.squad = res.squad.reduce((groups, item) => ({
            ...groups,
            [item.position]: [...(groups[item.position] || []), item]
          }), {})
        }
      )
    )
  }

  getFlag(name: string) {
    return this.flagsService.getCountryKey(name);
  }

  getStadium(team: any) {
    return `../../../assets/images/stadiums/${team.id}.jpg`
  }
}
