import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LoginComponent } from './login/login.component';
import { GraficosComponent } from './graficos/graficos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'servicios/:hab', component: ReservacionComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'graficos', component: GraficosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
