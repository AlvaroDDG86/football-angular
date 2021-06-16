import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-last',
  templateUrl: './ag-grid-last.component.html',
  styleUrls: ['./ag-grid-last.component.css']
})
export class AgGridLastComponent implements OnInit {
  last: string[]

  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    this.last = params.value.split(',').map(res => {
      return { value: res }
    })
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams) {
    this.last = params.value;
  }

  getClass(item: string) {
    return {
      'win-color': item === 'W',
      'draw-clor': item === 'D',
      'lost-color': item === 'L'
    }
  }

}
