import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './views/criar-usuario/criar-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'criar-usuario', component: CriarUsuarioComponent },
    { path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
