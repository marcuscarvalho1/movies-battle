import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarUsuarioComponent } from './views/criar-usuario/criar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CabecalhoComponent } from './views/cabecalho/cabecalho.component';

@NgModule({
    declarations: [
        AppComponent,
        CriarUsuarioComponent,
        HomeComponent,
        LoginComponent,
        CabecalhoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        HttpClientModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
