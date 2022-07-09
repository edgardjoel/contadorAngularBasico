import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  
  @Input() contador!:number;
  @Output() cambioContadorHijo = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *=2;
    this.cambioContadorHijo.emit(this.contador);
   
  }

  dividir(){
    this.contador /=2;
    this.cambioContadorHijo.emit(this.contador);
   
  }
  resetNieto(nuevoContador:any){
    this.contador=nuevoContador;
    this.cambioContadorHijo.emit(this.contador);
  }

}
