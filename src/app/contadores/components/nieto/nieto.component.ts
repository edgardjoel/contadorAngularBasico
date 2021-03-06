import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  
  @Input() contador!:number;
  @Output() cambioContadorNieto = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  
  reset(){
    this.contador=0;
    this.cambioContadorNieto.emit(this.contador);
  }
}
