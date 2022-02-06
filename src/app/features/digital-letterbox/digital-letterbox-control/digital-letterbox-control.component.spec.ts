import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLetterboxControlComponent } from './digital-letterbox-control.component';

describe('DigitalLetterboxControlComponent', () => {
  let component: DigitalLetterboxControlComponent;
  let fixture: ComponentFixture<DigitalLetterboxControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalLetterboxControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalLetterboxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
