import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from '../card-details/card-details.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { HomeService } from '../home.service';

import { HomeComponent } from './home.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { toBase64String } from '@angular/compiler/src/output/source_map';
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
    },
    {
      id: 'dp6-90',
      name: 'Cubone',
      nationalPokedexNumber: 104,
      imageUrl: 'https://images.pokemontcg.io/dp6/90.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/dp6/90_hires.png',
      
    },
    {
      id: 'swsh4-175',
      name: 'Drapion V',
      nationalPokedexNumber: 452,
      imageUrl: 'https://images.pokemontcg.io/swsh4/175.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/swsh4/175_hires.png',
      
    }
  ]
}

const mockResponseVazio: any ={
  cards: []
}


describe('HomeComponent', () => {
  let service: HomeService;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([ { path: 'card-details', component: CardDetailsComponent}]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ HomeComponent, CardDetailsComponent ],
      providers: [
        HomeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HomeService);
  });

  it('should create', () => {
    component.nomePokemon = 'Vespiquen'
    expect(component).toBeTruthy();
  });

  it('deve pesquisar', () => {
    expect(component.pesquisar()).toBe(undefined);
  });

  it('deve pesquisar', () => {
    const card = { nome: 'teste'};
    expect(component.detalhar(card)).toBe(undefined);
  });

  it('deve buscar por nome. (Sucesso)', () => {
    const service = TestBed.inject(HomeService);
    component.nomePokemon = 'Vespiquen'
    spyOn(service, 'buscarPorNome').and.returnValue(of(mockresponse));
    component.buscarPorNome()
    expect(component).toBeTruthy();
  });

  it('deve buscar por nome. (Error)', () => {
    const service = TestBed.inject(HomeService);
    component.nomePokemon = 'Vespiquen'
    spyOn(service, 'buscarPorNome').and.returnValue(throwError({status: 500}));
    component.buscarPorNome()
    expect(component).toBeTruthy();
  });

  it('deve buscar por nome. (Vazio)', () => {
    const service = TestBed.inject(HomeService);
    component.nomePokemon = 'Vespiquen'
    spyOn(service, 'buscarPorNome').and.returnValue(of(mockResponseVazio));
    component.buscarPorNome()
    expect(component).toBeTruthy();
  });
  it('deve listar todos cards', () => {
    const service = TestBed.inject(HomeService);
    spyOn(service, 'listarTodosCards').and.returnValue(of(mockresponse));
    component.listarTodosCards();
    expect(component).toBeTruthy();
  });
});
