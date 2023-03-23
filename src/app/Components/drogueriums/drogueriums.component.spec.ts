import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogueriumsComponent } from './drogueriums.component';

describe('DrogueriumsComponent', () => {
  let component: DrogueriumsComponent;
  let fixture: ComponentFixture<DrogueriumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrogueriumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrogueriumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
