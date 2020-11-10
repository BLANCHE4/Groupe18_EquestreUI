import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepriseCoursComponent } from './reprise-cours.component';

describe('RepriseCoursComponent', () => {
  let component: RepriseCoursComponent;
  let fixture: ComponentFixture<RepriseCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepriseCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepriseCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
