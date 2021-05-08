import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor() { }

  getColorPosition(position: number, league: string) {
    switch (league) {
      case 'PD': // Primera división
        switch(true) {
          case position < 5:
            return 'position green';
          case position < 7 && position > 4:
            return 'position blue';
          case position === 7:
            return 'position orange';
          case position > 17:
            return 'position red';
          case position > 7 && position < 18:
            return 'position gray';
        }
        break;
      case 'PL': // Premier League
      case 'SA': // Serie A
        switch(true) {
          case position < 5:
            return 'position green';
          case position === 5:
            return 'position blue';
          case position > 17:
            return 'position red';
          case position > 5 && position < 18:
            return 'position gray';
        }
        break;
      case 'FL1': // France League 1
        switch(true) {
          case position < 3:
            return 'position green';
          case position === 3:
            return 'position blue';
          case position === 4:
          case position === 18:
            return 'position orange';
          case position > 18:
            return 'position red';
          case position > 4 && position < 18:
            return 'position gray';
        }
        break;
      case 'BL1': // Barclays League 1
        switch(true) {
          case position < 5:
            return 'position green';
          case position === 5:
            return 'position blue';
          case position === 16:
            return 'position orange';
          case position > 16:
            return 'position red';
          case position > 5 && position < 16:
            return 'position gray';
        }
        break;
    }
  }

}
