import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-image',
  templateUrl: './ag-grid-image.component.html',
  styleUrls: ['./ag-grid-image.component.css'],
})
export class AgGridImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imagePath: string;
  teamName: string;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.imagePath = params.value;
    this.teamName = params.data.team.name;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams) {
    this.imagePath = params.value;
    this.teamName = params.data.team.name;
  }

}
