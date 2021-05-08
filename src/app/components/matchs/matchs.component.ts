import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
  @Input() matches: any[]
  constructor() { }

  ngOnInit(): void {
  }

}
