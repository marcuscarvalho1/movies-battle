import { Usuario } from "./usuario.model";

export class Ranking{
    id: number = 0;
    posicao: number = 0;
    usuario: Usuario = {"id": 0, "nomeUsuario": ''};
    pontos: number = 0;
}