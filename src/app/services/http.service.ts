import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import{ GlobalConstants } from '../common/global-constants';
import { map } from 'rxjs/operators';
import { Team } from '../interfaces/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getLeague(league: number) {
    const headers = new HttpHeaders({'X-Auth-Token': GlobalConstants.apiKey});

    return this.http.get(`${GlobalConstants.apiURL}competitions/${league}/teams`, { headers })
  }

  getTeam(team: number): Observable<Team> {
    const headers = new HttpHeaders({'X-Auth-Token': GlobalConstants.apiKey});

    return this.http.get(`${GlobalConstants.apiURL}teams/${team}`, { headers }).pipe(
      map((data: Team) => {
        data.squad = data.squad.sort(this.sortByPosition)
        return data
      })
    )
  }

  sortByPosition(a, b) {
    if (a.position && b.position) {
      const nameA = a.position.toLocaleUpperCase();
      const nameB = b.position.toLocaleUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }
    return -1;
  }

  getPlayer(player: number) {
    const headers = new HttpHeaders({'X-Auth-Token': GlobalConstants.apiKey});

    return this.http.get(`${GlobalConstants.apiURL}players/${player}`, { headers })
  }

  getStandings(league: number) {
    const headers = new HttpHeaders({'X-Auth-Token': GlobalConstants.apiKey});

    return this.http.get(`${GlobalConstants.apiURL}competitions/${league}/standings`, { headers })
  }

  getCompetitions() {
    const headers = new HttpHeaders({'X-Auth-Token': GlobalConstants.apiKey});

    return this.http.get(`${GlobalConstants.apiURL}competitions`, { headers })
  }

  getMatches(league: number, day: number) {
    const headers = new HttpHeaders({'X-Auth-Token': GlobalConstants.apiKey});

    return this.http.get(`${GlobalConstants.apiURL}competitions/${league}/matches?matchday=${day}`, { headers })
  }
}
