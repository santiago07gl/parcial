import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Estudiante2 } from './estudiante-2';

describe('Estudiante2', () => {
  let component: Estudiante2;
  let fixture: ComponentFixture<Estudiante2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estudiante2],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estudiante2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
