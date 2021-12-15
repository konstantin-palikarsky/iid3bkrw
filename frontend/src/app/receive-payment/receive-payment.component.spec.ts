import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPaymentComponent } from './receive-payment.component';

describe('ReceivePaymentComponent', () => {
  let component: RequestPaymentComponent;
  let fixture: ComponentFixture<RequestPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
