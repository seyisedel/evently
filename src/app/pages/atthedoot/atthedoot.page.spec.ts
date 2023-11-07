import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtthedootPage } from './atthedoot.page';

describe('AtthedootPage', () => {
  let component: AtthedootPage;
  let fixture: ComponentFixture<AtthedootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtthedootPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtthedootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
