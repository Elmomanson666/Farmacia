import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { TableroComponent } from './Components/tablero/tablero.component';

const routes: Routes = [
  {
    path: 'Clientes', component:FormularioComponent
  },
  {
    path: 'Drogueriums', component:TableroComponent
  },
  {
    path: 'Farmacoes', component:TablaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
