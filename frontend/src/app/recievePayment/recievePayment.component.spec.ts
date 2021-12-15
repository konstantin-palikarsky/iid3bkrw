import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievePaymentComponent } from './recievePayment.component';

describe('RecievePaymentComponent', () => {
  let component: RecievePaymentComponent;
  let fixture: ComponentFixture<RecievePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
