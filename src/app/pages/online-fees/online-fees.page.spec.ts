import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlineFeesPage } from './online-fees.page';

describe('OnlineFeesPage', () => {
  let component: OnlineFeesPage;
  let fixture: ComponentFixture<OnlineFeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFeesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
