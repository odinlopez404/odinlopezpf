import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProyectoComponent } from './update-proyecto.component';

describe('UpdateProyectoComponent', () => {
  let component: UpdateProyectoComponent;
  let fixture: ComponentFixture<UpdateProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
