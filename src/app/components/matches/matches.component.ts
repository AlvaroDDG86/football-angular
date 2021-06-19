import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class matchesComponent implements OnInit {
  @Input() matches: any[]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMatch(match) {
    this.router.navigate([`/match/${match.id}`]);
  }
}
