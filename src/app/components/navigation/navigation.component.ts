import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { InfoLeagueService } from 'src/app/services/info-league.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [InfoLeagueService]
})
export class NavigationComponent {
  infoLeague: string
  colours: any
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private infoLeagueService: InfoLeagueService) {
    this.infoLeagueService.infoLeague$.subscribe(res => {
      this.infoLeague = res
    })
    this.infoLeagueService.infoColours$.subscribe(res => {
      this.colours = res
    })
  }

}
