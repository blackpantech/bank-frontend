import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsRow } from './buttons-row';

describe('ButtonsRow', () => {
  let component: ButtonsRow;
  let fixture: ComponentFixture<ButtonsRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
