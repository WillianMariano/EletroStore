import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../servicos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservasComponent } from '../reservas/reservas.component';
//import { login } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() usuario: string;
  produtos;
  busca: string;

  constructor(
    private servicos: ServicosService,
    private modalService: NgbModal
    ) {
    this.produtos = servicos.getListaProdutos();
  }

  ngOnInit() {
  }

  buscar() {
    this.produtos = this.servicos.buscaProdutos(this.busca);
  }

  recarregar() {
    location.reload();
  }

  openModal() {
    const modal = this.modalService.open(ReservasComponent);
    modal.componentInstance.name = "Reservas";
  }
}
