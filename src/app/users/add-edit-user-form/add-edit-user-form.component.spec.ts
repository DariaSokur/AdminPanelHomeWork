import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserFormComponent } from './add-edit-user-form.component';

describe('AddEditUserFormComponent', () => {
  let component: AddEditUserFormComponent;
  let fixture: ComponentFixture<AddEditUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
