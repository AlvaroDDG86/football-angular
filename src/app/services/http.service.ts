import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get(`${GlobalConstants.apiURL}competitions/${league}/teams`)
  }

  getTeam(team: number): Observable<Team> {
    return this.http.get(`${GlobalConstants.apiURL}teams/${team}`).pipe(
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
    return this.http.get(`${GlobalConstants.apiURL}players/${player}`)
  }

  getStandings(league: number) {
    return this.http.get(`${GlobalConstants.apiURL}competitions/${league}/standings`)
  }

  getCompetitions() {
    return this.http.get(`${GlobalConstants.apiURL}competitions`)
  }

  getMatches(league: number, day: number) {
    return this.http.get(`${GlobalConstants.apiURL}competitions/${league}/matches?matchday=${day}`)
  }

  getMatch(match: string) {
    return this.http.get(`${GlobalConstants.apiURL}matches/${match}`)
  }
}
