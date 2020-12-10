import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExperienciasPage } from './experiencias.page';

describe('ExperienciasPage', () => {
  let component: ExperienciasPage;
  let fixture: ComponentFixture<ExperienciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
