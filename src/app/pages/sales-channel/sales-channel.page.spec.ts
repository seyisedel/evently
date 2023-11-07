import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesChannelPage } from './sales-channel.page';

describe('SalesChannelPage', () => {
  let component: SalesChannelPage;
  let fixture: ComponentFixture<SalesChannelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesChannelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
