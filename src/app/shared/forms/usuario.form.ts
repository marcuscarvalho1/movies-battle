import { Validators } from "@angular/forms";

export class UsuarioForm{
    nomeUsuario: any = ['', Validators.required];
    senha: any = ['', Validators.required];
}