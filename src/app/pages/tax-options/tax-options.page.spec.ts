import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxOptionsPage } from './tax-options.page';

describe('TaxOptionsPage', () => {
  let component: TaxOptionsPage;
  let fixture: ComponentFixture<TaxOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
