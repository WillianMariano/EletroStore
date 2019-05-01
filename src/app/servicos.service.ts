import { Injectable } from '@angular/core';
import { PRODUTOS } from './mock-produtos';
import { Produto } from './produto';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  baseProdutos = PRODUTOS;
  reservasProdutos: Array<Produto> = [];
  loginUsuario: string;
  loginSenha: string;

  constructor() { }

  getListaProdutos() {
    return this.baseProdutos;
  }

  buscaProdutos(busca: string) {
    const lista = this.baseProdutos.filter(
      p => p.nome.match("(.*)" + busca + "(.*)") || p.id.toString().match("(.*)" + busca + "(.*)"));
    return lista;
  }

  reservarProduto(p: Produto) {
    this.reservasProdutos.push(p);
  }

  getReservasProdutos() {
    return this.reservasProdutos;
  }
}
