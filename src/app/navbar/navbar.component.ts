import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public valor: string | undefined;
  public tipoUsuario: string | undefined;
  public nombre: string | undefined;

  constructor(private router: Router, private pagina: PaginaService) {
    this.pagina.valor$.subscribe(valor => {
      this.valor = valor;
    });
    this.pagina.tipoUsuario$.subscribe(tipoUsuario => {
      this.tipoUsuario = tipoUsuario;
    });
    this.pagina.nombre$.subscribe(nombre => {
      this.nombre = nombre;
    });
  }

  ver(valor: string) {
    if (valor.trim() == 'fotos') {
      this.router.navigate(['/galeria']);
    }
    if (valor.trim() == 'precios') {
      this.router.navigate(['/habitaciones']);
    }
    if (valor.trim() == 'habitaciones') {
      this.router.navigate(['/habitaciones']);
    }
    if (valor.trim() == 'reservar') {
      this.router.navigate(['/servicios', '']);
    }
    if (valor.trim() == 'sobre') {
      this.router.navigate(['/nosotros']);
    }
    if (valor.trim() == 'opiniones') {
      this.router.navigate(['/nosotros']);
    }
  }
}
