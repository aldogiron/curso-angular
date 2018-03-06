import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresListadoComponent } from './valores-listado.component';

describe('ValoresListadoComponent', () => {
  let component: ValoresListadoComponent;
  let fixture: ComponentFixture<ValoresListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoresListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
