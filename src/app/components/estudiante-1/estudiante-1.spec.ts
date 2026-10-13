import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Estudiante1 } from './estudiante-1';

describe('Estudiante1', () => {
  let component: Estudiante1;
  let fixture: ComponentFixture<Estudiante1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estudiante1],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estudiante1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
