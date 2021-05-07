import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private httpService: HttpService,
      private flagsService: FlagsService,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.$team = this.httpService.getTeam(this.id);
  }

  getFlag(name: string) {
    return this.flagsService.getCountryKey(name);
  }
}
