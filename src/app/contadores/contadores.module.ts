import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadoresRoutingModule } from './contadores-routing.module';
import { PagesComponent } from './pages/pages.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { NietoComponent } from './components/nieto/nieto.component';



@NgModule({
  declarations: [
    
  
    PagesComponent,
            HijoComponent,
            NietoComponent
  ],
  imports: [
    CommonModule,
    ContadoresRoutingModule
  ]
})
export class ContadoresModule { }
