import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CouponEventPage } from './coupon-event.page';

describe('CouponEventPage', () => {
  let component: CouponEventPage;
  let fixture: ComponentFixture<CouponEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CouponEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
