import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
  @Input() matches: any[]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMatch(match) {
    this.router.navigate([`/match/${match.id}`]);
  }
}
