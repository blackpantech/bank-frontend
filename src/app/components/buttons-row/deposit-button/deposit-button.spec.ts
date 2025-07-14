import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositButton } from './deposit-button';

describe('DepositButton', () => {
  let component: DepositButton;
  let fixture: ComponentFixture<DepositButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
