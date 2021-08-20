import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '../home/home.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ModalAttackComponent } from './modal-attack.component';

import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeService } from '../home.service';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

describe('ModalAttackComponent', () => {
  let component: ModalAttackComponent;
  let fixture: ComponentFixture<ModalAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatSnackBarModule,
        MatDialogModule,
        HttpClientTestingModule,
      ],
      declarations: [ ModalAttackComponent, HomeComponent ],
      providers: [
        HomeService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
