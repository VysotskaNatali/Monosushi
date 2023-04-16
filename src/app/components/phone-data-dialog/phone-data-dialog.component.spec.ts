import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDataDialogComponent } from './phone-data-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('PhoneDataDialogComponent', () => {
  let component: PhoneDataDialogComponent;
  let fixture: ComponentFixture<PhoneDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneDataDialogComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatDialogModule,
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize  phone form', () => {
    expect(component.phoneForm.value).toEqual({ name: null, phone: null });
  });
});
