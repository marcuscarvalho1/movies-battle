import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { Sessao } from 'src/app/shared/models/sessao.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { RankingService } from 'src/app/shared/services/ranking.service';
import { SessaoService } from 'src/app/shared/services/sessao.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
    idUsuarioLogado: string | null = localStorage.getItem('idUsuarioLogado');
    rankingGeral: Ranking[] = [];
    colunasMostradas: string[] = ['posicao', 'nome', 'pontos'];

    constructor(
        private rankingService: RankingService,
        private sessaoService: SessaoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        console.log("imprime:" + this.idUsuarioLogado);
        this.consultaSessaoUsuario();
    }

    consultaRanking(){
        this.rankingService.consultaRanking().subscribe( data =>{
            this.rankingGeral = data;
        });
    }
    
    private consultaSessaoUsuario(){
        if(this.idUsuarioLogado != null && this.idUsuarioLogado != ''){
            this.sessaoService.consultaSessao(this.idUsuarioLogado).subscribe(data =>{
                if(data != null){
                    this.consultaRanking();
                }else{
                    localStorage.removeItem('idUsuarioLogado');
                    localStorage.removeItem('nomeUsuarioLogado');
                    this.router.navigate(['']);
                }
            });
        }else{
            this.router.navigate(['']);
        }
    }
    
    logoff(){
        this.sessaoService.logoff().subscribe(() =>{
            localStorage.removeItem('idUsuarioLogado');
            localStorage.removeItem('nomeUsuarioLogado');
            this.router.navigate(['']);
        });
    }

}
