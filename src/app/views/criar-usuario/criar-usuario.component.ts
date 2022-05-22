import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioForm } from 'src/app/shared/forms/usuario.form';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

    criarUsuarioFormGroup: FormGroup = new FormGroup({});
    criarUsuarioForm!: UsuarioForm;
    
    constructor(
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService
    ) { }

    ngOnInit(): void {
        this.criarUsuarioFormGroup = this.formBuilder.group(new UsuarioForm)
    }
    
    criaUsuario(){
        this.criarUsuarioForm = this.criarUsuarioFormGroup.getRawValue();
        this.usuarioService.criaNovousuario(this.criarUsuarioForm).subscribe(data => {
            if(data != null){
                alert('Usuário criado com sucesso!')
                
            }
        });
    }

}
