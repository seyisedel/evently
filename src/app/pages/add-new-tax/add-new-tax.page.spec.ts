import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewTaxPage } from './add-new-tax.page';

describe('AddNewTaxPage', () => {
  let component: AddNewTaxPage;
  let fixture: ComponentFixture<AddNewTaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewTaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
