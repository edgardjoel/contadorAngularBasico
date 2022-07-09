import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  contador:number;

  constructor() { 
    this.contador=10;
  }

  ngOnInit(): void {
  }

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

}
