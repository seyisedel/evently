import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectEventTypePage } from './select-event-type.page';

describe('SelectEventTypePage', () => {
  let component: SelectEventTypePage;
  let fixture: ComponentFixture<SelectEventTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEventTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEventTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
