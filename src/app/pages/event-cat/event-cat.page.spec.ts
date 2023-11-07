import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventCatPage } from './event-cat.page';

describe('EventCatPage', () => {
  let component: EventCatPage;
  let fixture: ComponentFixture<EventCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
