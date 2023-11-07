import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventTypePage } from './event-type.page';

describe('EventTypePage', () => {
  let component: EventTypePage;
  let fixture: ComponentFixture<EventTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
