import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './views/criar-usuario/criar-usuario.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'criar-usuario', component: CriarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
