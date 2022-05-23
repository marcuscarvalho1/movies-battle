import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EscolhaFilmeForm } from '../forms/escolhaFilme.form';
import { PartidaForm } from '../forms/partida.form';
import { Partida } from '../models/partida.model';

@Injectable({
    providedIn: 'root'
})
export class PartidaService {

    apiUrl: string = environment.apiUrl;
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'  
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }
    
    public iniciaPartida(partidaForm1: PartidaForm): Observable<Partida>{
        return this.httpClient.post<Partida>(this.apiUrl + "/partida/inicia", partidaForm1, this.httpOptions);
    }
    
    public escolheFilme(escolhaFilmeForm1: EscolhaFilmeForm): Observable<Partida>{
        return this.httpClient.post<Partida>(this.apiUrl + "/partida/escolhe-filme", escolhaFilmeForm1, this.httpOptions);
    }
    
    public encerraPartida(partidaId: number): Observable<Partida>{
        return this.httpClient.get<Partida>(this.apiUrl + "/partida/encerra/" + partidaId);
    }
}
