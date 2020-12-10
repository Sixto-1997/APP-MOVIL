import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboralesPage } from './laborales.page';

describe('LaboralesPage', () => {
  let component: LaboralesPage;
  let fixture: ComponentFixture<LaboralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboralesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
