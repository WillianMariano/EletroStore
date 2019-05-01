import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: ProdutoDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
