import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { EscolhaFilmeForm } from 'src/app/shared/forms/escolhaFilme.form';
import { PartidaForm } from 'src/app/shared/forms/partida.form';
import { Filme } from 'src/app/shared/models/filme.model';
import { Partida } from 'src/app/shared/models/partida.model';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { Sessao } from 'src/app/shared/models/sessao.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { FilmeService } from 'src/app/shared/services/filme.service';
import { PartidaService } from 'src/app/shared/services/partida.service';
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
    partidaIniciada: boolean = false;
    partidaAtual: Partida = new Partida;
    filmeAleatorio1: Filme = new Filme;
    filmeAleatorio2: Filme = new Filme;
    filmesVisiveis: boolean = false;

    constructor(
        private rankingService: RankingService,
        private sessaoService: SessaoService,
        private partidaService: PartidaService,
        private filmeService: FilmeService,
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
    
    iniciarPartida(){
        if(this.idUsuarioLogado != null && this.idUsuarioLogado != ''){
            this.sessaoService.consultaSessao(this.idUsuarioLogado).subscribe(data =>{
                if(data != null){
                    let partidaForm1: PartidaForm = new PartidaForm;
                    partidaForm1.erros = 0;
                    partidaForm1.pontos = 0;
                    partidaForm1.usuarioLogadoId = this.idUsuarioLogado;
                    
                    this.partidaService.iniciaPartida(partidaForm1).subscribe(data =>{
                        if(data != null){
                            this.partidaAtual = data;
                            this.partidaIniciada = true;
                            
                            this.proximaJogada();
                        }
                    });
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
    
    proximaJogada(){
        this.filmeService.puxaDoisFilmesAleatorios().subscribe(data =>{
            this.filmeAleatorio1 = data[0];
            this.filmeAleatorio2 = data[1];
            
            this.mostrarFilmes();
        });
    }
    
    escolherFilme(filmeEscolhidoId: number){
        console.log(filmeEscolhidoId);
        let escolhaFilmeForm: EscolhaFilmeForm = new EscolhaFilmeForm;
        escolhaFilmeForm.filme1Id = this.filmeAleatorio1.id;
        escolhaFilmeForm.filme2Id = this.filmeAleatorio2.id;
        escolhaFilmeForm.filmeEscolhidoId = filmeEscolhidoId;
        escolhaFilmeForm.partidaId = this.partidaAtual.id;
        
        this.partidaService.escolheFilme(escolhaFilmeForm).subscribe(data =>{
            this.partidaAtual = data;
            
            if(this.partidaAtual.erros == 3){
                alert("Você errou pela terceira vez! O jogo acabou! Veja o novo ranking!");
                this.consultaRanking;
                this.partidaIniciada = false;
                this.router.navigate(['']);
            }else{
                this.esconderFilmes();
                setTimeout(() => {
                    this.proximaJogada();
                }, 500);
            }
        });
    }
    
    mostrarFilmes(){
        this.filmesVisiveis = true;
    }
    
    esconderFilmes(){
        this.filmesVisiveis = false;
    }
    
    encerrarPartida(){
        this.partidaService.encerraPartida(this.partidaAtual.id).subscribe(() => {
            this.consultaRanking;
            this.partidaIniciada = false;
        });
    }

}
