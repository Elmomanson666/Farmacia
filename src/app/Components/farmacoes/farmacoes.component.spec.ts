import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmacoesComponent } from './farmacoes.component';

describe('FarmacoesComponent', () => {
  let component: FarmacoesComponent;
  let fixture: ComponentFixture<FarmacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
