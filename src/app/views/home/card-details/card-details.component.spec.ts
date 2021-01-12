import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeService } from '../home.service';
import { HomeComponent } from '../home/home.component';

import { CardDetailsComponent } from './card-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;
const card = {
  id: 'sm10-217'
}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatSnackBarModule,
        MatDialogModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([ { path: '', component: HomeComponent}]),
      ],
      declarations: [ CardDetailsComponent, HomeComponent ],
      providers: [
        HomeService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    component.card = 'sm10-217';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve Voltar', () => {
    expect(component.voltar()).toBe(undefined);
  });
  it('deve mostrar modal ataque', () => {
    const ataque = { nome: 'teste', id: 'sm10-217'}
    expect(component.mostrarModalAtaque(ataque)).toBe(undefined);
  });
});
