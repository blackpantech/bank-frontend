import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDialog } from './transfer-dialog';

describe('TransferDialog', () => {
  let component: TransferDialog;
  let fixture: ComponentFixture<TransferDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
