import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FlagsService } from 'src/app/services/flags.service';
import { HttpService } from 'src/app/services/http.service';

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
      private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.$team = this.httpService.getTeam(this.id).pipe(
      tap(
        (res: any) => {
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

  getBackground(colors: string) {
    let [ colorFrom, colorTo ] = colors.split('/')
    return `linear-gradient(to right, ${colorFrom.trim().toLowerCase()} , ${colorTo.trim().toLowerCase()});`
  }
}
