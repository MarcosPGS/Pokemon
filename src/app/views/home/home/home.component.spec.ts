import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from '../card-details/card-details.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { HomeService } from '../home.service';

import { HomeComponent } from './home.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { toBase64String } from '@angular/compiler/src/output/source_map';

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
    expect(component).toBeTruthy();
  });

  it('deve pesquisar', () => {
    expect(component.pesquisar()).toBe(undefined);
  });

  it('deve pesquisar', () => {
    const card = { nome: 'teste'};
    expect(component.detalhar(card)).toBe(undefined);
  });

  it('deve buscar por nome', () => {
    expect(component.buscarPorNome()).toBe(undefined);
  });
  it('deve listar todos cards', () => {
    expect(component.listarTodosCards()).toBe();
  });
});
