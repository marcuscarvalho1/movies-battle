import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ranking } from '../models/ranking.model';

@Injectable({
    providedIn: 'root'
})
export class RankingService {

    apiUrl: string = environment.apiUrl;
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'  
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }
    
    public consultaRanking(): Observable<Ranking[]>{
        return this.httpClient.get<Ranking[]>(this.apiUrl + "/ranking/consulta");
    }
}
