import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueAssureurComponent } from './vue-assureur.component';

describe('VueAssureurComponent', () => {
  let component: VueAssureurComponent;
  let fixture: ComponentFixture<VueAssureurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueAssureurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueAssureurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
