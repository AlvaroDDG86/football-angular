import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridImageComponent } from './ag-grid-image.component';

describe('AgGridImageComponent', () => {
  let component: AgGridImageComponent;
  let fixture: ComponentFixture<AgGridImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
