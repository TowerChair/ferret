import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasElectricasComponent } from './herramientas-electricas.component';

describe('HerramientasElectricasComponent', () => {
  let component: HerramientasElectricasComponent;
  let fixture: ComponentFixture<HerramientasElectricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerramientasElectricasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerramientasElectricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
