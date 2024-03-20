import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCardComponent } from './detailed-card.component';

describe('DetailedCardComponent', () => {
  let component: DetailedCardComponent;
  let fixture: ComponentFixture<DetailedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
