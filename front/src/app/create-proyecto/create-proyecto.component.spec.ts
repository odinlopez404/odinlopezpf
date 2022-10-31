import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProyectoComponent } from './create-proyecto.component';

describe('CreateProyectoComponent', () => {
  let component: CreateProyectoComponent;
  let fixture: ComponentFixture<CreateProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
