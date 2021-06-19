import { ComponentFixture, TestBed } from '@angular/core/testing';

import { matchesComponent } from './matches.component';

describe('matchesComponent', () => {
  let component: matchesComponent;
  let fixture: ComponentFixture<matchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ matchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(matchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
