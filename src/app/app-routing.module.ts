import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'contador',
    loadChildren: ()=> import('./contadores/contadores.module').then(m => m.ContadoresModule)
  },
  {
    path:'**',
    redirectTo:'contador'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
