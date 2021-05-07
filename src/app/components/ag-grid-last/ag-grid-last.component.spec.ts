import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridLastComponent } from './ag-grid-last.component';

describe('AgGridLastComponent', () => {
  let component: AgGridLastComponent;
  let fixture: ComponentFixture<AgGridLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
