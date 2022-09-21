import { Validators } from "@angular/forms";
import { senhaFacilDeducaoValidator } from "src/app/views/criar-usuario/senha-facil-deducao.validator";

export class UsuarioForm{
    nomeUsuario: any = ['', [Validators.required, Validators.minLength(4)]];
    senha: any = ['', [Validators.required, Validators.minLength(6), senhaFacilDeducaoValidator]];
}