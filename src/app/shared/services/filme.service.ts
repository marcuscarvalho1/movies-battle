import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Filme } from '../models/filme.model';

@Injectable({
    providedIn: 'root'
})
export class FilmeService {

    apiUrl: string = environment.apiUrl;
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'  
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }
    
    public puxaDoisFilmesAleatorios(): Observable<Filme[]>{
        return this.httpClient.get<Filme[]>(this.apiUrl + "/filme/dois-filmes-aleatorios");
    }
}
