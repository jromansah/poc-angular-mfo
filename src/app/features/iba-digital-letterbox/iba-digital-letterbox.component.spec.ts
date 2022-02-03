import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbaDigitalLetterboxComponent } from './iba-digital-letterbox.component';

describe('IbaDigitalLetterboxComponent', () => {
  let component: IbaDigitalLetterboxComponent;
  let fixture: ComponentFixture<IbaDigitalLetterboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbaDigitalLetterboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbaDigitalLetterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
