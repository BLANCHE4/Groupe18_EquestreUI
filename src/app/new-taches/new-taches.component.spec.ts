import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTachesComponent } from './new-taches.component';

describe('NewTachesComponent', () => {
  let component: NewTachesComponent;
  let fixture: ComponentFixture<NewTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
