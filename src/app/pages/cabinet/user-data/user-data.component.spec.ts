import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Firestore } from "@angular/fire/firestore";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from 'ngx-toastr';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataComponent ],
      imports: [
        ReactiveFormsModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Firestore, useValue: {} },
        { provide: ToastrService, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the user form', () => {
    component.inituserForm();
    expect(component.userForm).toBeDefined();
    expect(component.userForm.get('email')).toBeDefined();
    expect(component.userForm.get('firstN')).toBeDefined();
    expect(component.userForm.get('lastN')).toBeDefined();
    expect(component.userForm.get('phone')).toBeDefined();
    expect(component.userForm.get('address')).toBeDefined();
  });

});
