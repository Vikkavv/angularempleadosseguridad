import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { LoginComponent } from './components/login-component/login-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { SearchComponent } from './components/search-component/search-component';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from './services/EmpleadoService';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    PerfilComponent,
    SubordinadosComponent,
    LoginComponent,
    MenuComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), AppRoutingModule, EmpleadoService],
  bootstrap: [App],
})
export class AppModule {}
