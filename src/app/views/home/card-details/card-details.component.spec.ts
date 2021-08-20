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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';

const mockresponse: any ={
  cards: [
    {
      id: 'xy7-10',
      name: 'Vespiquen',
      nationalPokedexNumber: 416,
      imageUrl: 'https://images.pokemontcg.io/xy7/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy7/10_hires.png',
      attacks: []=[]
    }
  ]
}
const card = {
  id: 'xy7-10'
}
const cardError = {
  id: ''
}
describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    component.voltar()
    expect(component).toBeTruthy();
  });
  it('deve mostrar modal ataque', () => {
    const ataque = { nome: 'teste', id: 'sm10-217'}
    expect(component.mostrarModalAtaque(ataque)).toBe(undefined);
  });

  it('deve buscar por nome. (Sucesso)', () => {
    const service = TestBed.inject(HomeService);
    component.card = card;
    spyOn(service, 'buscarPorId').and.returnValue(of(mockresponse));
    component.buscarPorId()
    expect(component).toBeTruthy();
  });

  it('deve buscar por nome. (Error)', () => {
    const service = TestBed.inject(HomeService);
    component.card = cardError;
    spyOn(service, 'buscarPorId').and.returnValue(throwError({status: 500}));
    component.buscarPorId()
    expect(component).toBeTruthy();
  });
});
