import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginForm } from 'src/app/shared/forms/login.form';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    fotoPrincipalUrl = 'https://m.media-amazon.com/images/M/MV5BMTE5OTE4OTE2Nl5BMl5BanBnXkFtZTYwMDkzMTQ3._V1_SX300.jpg';
    loginFormGroup!: FormGroup;
    loginForm!: LoginForm;

    constructor(
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginFormGroup = this.formBuilder.group(new LoginForm)
    }
    
    login(){
        this.loginForm = this.loginFormGroup.getRawValue();
        this.usuarioService.loginUsuario(this.loginForm).subscribe( data =>{
            if(data != null){
                this.router.navigate(['home']);
            }
        }, err =>{
            alert("A API retornou um erro: " + err.message);
        })
    }

}
