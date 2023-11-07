import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisibillityPage } from './visibillity.page';

describe('VisibillityPage', () => {
  let component: VisibillityPage;
  let fixture: ComponentFixture<VisibillityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibillityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisibillityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
