import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesEndPage } from './sales-end.page';

describe('SalesEndPage', () => {
  let component: SalesEndPage;
  let fixture: ComponentFixture<SalesEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
