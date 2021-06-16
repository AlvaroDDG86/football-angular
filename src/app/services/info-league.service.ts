import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoLeagueService {
  private infoLeagueSource = new Subject<string>();
  private infoColoursSource = new Subject<any>();
  infoLeague$ = this.infoLeagueSource.asObservable();
  infoColours$ = this.infoColoursSource.asObservable();

  constructor() { }

  setInfoLeague(info: string) {
    this.infoLeagueSource.next(info)
  }

  setInfoColours(colours: any) {
    this.infoColoursSource.next(colours)
  }

}
