import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchOrdersPage } from './search-orders.page';

describe('SearchOrdersPage', () => {
  let component: SearchOrdersPage;
  let fixture: ComponentFixture<SearchOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrdersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
