import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawButton } from './withdraw-button';

describe('WithdrawButton', () => {
  let component: WithdrawButton;
  let fixture: ComponentFixture<WithdrawButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
