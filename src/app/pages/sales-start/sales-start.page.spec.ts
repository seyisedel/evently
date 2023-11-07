import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesStartPage } from './sales-start.page';

describe('SalesStartPage', () => {
  let component: SalesStartPage;
  let fixture: ComponentFixture<SalesStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
