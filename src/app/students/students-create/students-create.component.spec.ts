import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCreateComponent } from './students-create.component';

describe('StudentsCreateComponent', () => {
  let component: StudentsCreateComponent;
  let fixture: ComponentFixture<StudentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
