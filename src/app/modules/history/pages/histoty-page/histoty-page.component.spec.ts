import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistotyPageComponent } from './histoty-page.component';

describe('HistotyPageComponent', () => {
  let component: HistotyPageComponent;
  let fixture: ComponentFixture<HistotyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistotyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistotyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
