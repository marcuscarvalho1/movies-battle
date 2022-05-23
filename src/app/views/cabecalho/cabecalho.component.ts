import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
    selector: 'app-cabecalho',
    templateUrl: './cabecalho.component.html',
    styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
    
    title = 'Movies-Battle';
    description = 'Quiz de conhecimentos em filmes'

    constructor() { }

    ngOnInit(): void {
    }

}
