import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferButton } from './transfer-button';

describe('TransferButton', () => {
  let component: TransferButton;
  let fixture: ComponentFixture<TransferButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
