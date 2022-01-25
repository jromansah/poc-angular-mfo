import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLetterboxComponent } from './digital-letterbox.component';

describe('DigitalLetterboxComponent', () => {
  let component: DigitalLetterboxComponent;
  let fixture: ComponentFixture<DigitalLetterboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalLetterboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalLetterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
