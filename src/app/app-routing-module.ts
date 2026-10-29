import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { SearchComponent } from './components/search-component/search-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { AuthGuard } from './guards/auth-guard';
import { ContadorSignal } from './components/contador-signal/contador-signal';

export const routes: Routes = [
  {path:"", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"subordinados", component: SubordinadosComponent, canActivate: [AuthGuard]},
  {path:"search/:searched", component: SearchComponent, canActivate: [AuthGuard]},
  {path:"perfil", component: PerfilComponent, canActivate: [AuthGuard]},
  {path:"contadorsignal", component: ContadorSignal, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
