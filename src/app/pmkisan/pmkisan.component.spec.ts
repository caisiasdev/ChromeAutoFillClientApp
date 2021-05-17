import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmkisanComponent } from './pmkisan.component';

describe('PmkisanComponent', () => {
  let component: PmkisanComponent;
  let fixture: ComponentFixture<PmkisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmkisanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmkisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
