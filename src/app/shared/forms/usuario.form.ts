import { Validators } from "@angular/forms";

export class UsuarioForm{
    nomeUsuario: any = ['', [Validators.required, Validators.minLength(4)]];
    senha: any = ['', [Validators.required, Validators.minLength(6)]];
}