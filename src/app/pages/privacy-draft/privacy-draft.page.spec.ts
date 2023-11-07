import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivacyDraftPage } from './privacy-draft.page';

describe('PrivacyDraftPage', () => {
  let component: PrivacyDraftPage;
  let fixture: ComponentFixture<PrivacyDraftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyDraftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyDraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
