import { Injectable } from '@angular/core';

const EXTRA_COLORS = {
  'SkyBlue': '#6DCBE9',
  'NavyBlue': '#002479',
  'Claret': '#811331'
}


@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  getColors(colorsTeam: any) {
    const [ first, second ] = colorsTeam.clubColors.replace(/\s/g, '').split('/')

    return {
      background: (EXTRA_COLORS[first] ? EXTRA_COLORS[first] : first).toLowerCase(),
      color: (EXTRA_COLORS[second] ? EXTRA_COLORS[second] : second).toLowerCase()
    }
  }
}
