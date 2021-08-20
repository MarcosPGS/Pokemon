import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, MatSnackBarModule, BrowserAnimationsModule, NoopAnimationsModule],
      providers: [HomeService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Listar Cards', () => {
    expect(service.listarTodosCards()).toBeTruthy();
  });

  it('Buscar por nome', () => {
    const nome = 'Reshiram & Charizard-GX';
    expect(service.buscarPorNome(nome)).toBeTruthy();
  });


  it('Buscar por id', () => {
    const id = 'sm10-217';
    expect(service.buscarPorId(id)).toBeTruthy();
  });
});
