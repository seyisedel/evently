import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventSettingPage } from './event-setting.page';

describe('EventSettingPage', () => {
  let component: EventSettingPage;
  let fixture: ComponentFixture<EventSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
