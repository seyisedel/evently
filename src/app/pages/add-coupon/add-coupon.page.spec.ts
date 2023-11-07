import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCouponPage } from './add-coupon.page';

describe('AddCouponPage', () => {
  let component: AddCouponPage;
  let fixture: ComponentFixture<AddCouponPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCouponPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCouponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
