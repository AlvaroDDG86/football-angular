import { Component, Input, OnInit } from '@angular/core';
import { FlagsService } from '../../services/flags.service';

@Component({
  selector: 'app-player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.css']
})
export class PlayerListItemComponent implements OnInit {
  @Input() player: any;
  constructor(private flagsService: FlagsService) { }

  ngOnInit(): void {
  }

  getFlag(name: string) {
    return this.flagsService.getCountryKey(name);
  }

}
