import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  URL: string;
  constructor(private http: HttpClient) {
      this.URL = environment.apiUtl;
   }

  buscarPorId(id: string): Observable<any>{
        const url = `${this.URL}/${id}`;
        return this.http.get<any>(url);
  }

  buscarPorNome(nome: string): Observable<any>{
    const url = `${this.URL}?name=${nome}`;
    return this.http.get<any[]>(url);
  }

  listarTodosCards(): Observable<any> {
    return this.http.get<any>(`${this.URL}`);
  }
}
