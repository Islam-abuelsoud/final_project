import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesdetlComponent } from './moviesdetl.component';

describe('MoviesdetlComponent', () => {
  let component: MoviesdetlComponent;
  let fixture: ComponentFixture<MoviesdetlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesdetlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesdetlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
