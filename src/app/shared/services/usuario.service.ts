import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../forms/login.form';
import { UsuarioForm } from '../forms/usuario.form';
import { Usuario } from '../models/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    
    apiUrl: string = environment.apiUrl;
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'  
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }
    
    public criaNovousuario(usuarioForm1: UsuarioForm): Observable<Usuario>{
        return this.httpClient.post<Usuario>(this.apiUrl + "/usuario/insere", usuarioForm1, this.httpOptions);
    }
    
    public loginUsuario(loginForm1: LoginForm): Observable<Usuario>{
        return this.httpClient.post<Usuario>(this.apiUrl + "/usuario/autentica", loginForm1, this.httpOptions);
    }
}
