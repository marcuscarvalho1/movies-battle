import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: FormGroup){
    const nomeUsuario: string = formGroup.get('nomeUsuario')?.value ?? '';
    const senha: string = formGroup.get('senha')?.value ?? '';
    
    return nomeUsuario + senha != '' && nomeUsuario === senha ? { usuarioSenhaIguais: true } : null;
}
