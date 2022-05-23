import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sessao } from '../models/sessao.model';

@Injectable({
    providedIn: 'root'
})
export class SessaoService {
    
    apiUrl: string = environment.apiUrl;
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'  
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }

    public consultaSessao(idUsuario: string): Observable<Sessao>{
        return this.httpClient.get<Sessao>(this.apiUrl + "/sessao/" + idUsuario);
    }
    
    public logoff(): Observable<Sessao>{
        return this.httpClient.delete<Sessao>(this.apiUrl + "/sessao/encerra");
    }
}
