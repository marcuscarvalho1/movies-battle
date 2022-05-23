import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './views/criar-usuario/criar-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'criar-usuario', component: CriarUsuarioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
