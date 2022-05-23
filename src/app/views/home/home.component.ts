import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { RankingService } from 'src/app/shared/services/ranking.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    rankingGeral: Ranking[] = [];
    colunasMostradas: string[] = ['posicao', 'nome', 'pontos'];

    constructor(
        private rankingService: RankingService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.consultaRanking();
    }

    consultaRanking(){
        this.rankingService.consultaRanking().subscribe( data =>{
            this.rankingGeral = data;
            console.log(this.rankingGeral);
        })
    }

}
