import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationComponent } from './clasification.component';

describe('ClasificationComponent', () => {
  let component: ClasificationComponent;
  let fixture: ComponentFixture<ClasificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
