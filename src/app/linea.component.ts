import { Component,OnInit } from '@angular/core';
import { EspService } from '../services/esp.service';
@Component({
  selector: '',
  templateUrl: '',
  styleUrls: ['']
})
export class LineaComponent implements OnInit{

  constructor(private Esp: EspService){}

  ngOnInit(): void{
    this.Esp.escuchar();

  }

 

  PRENDER(){
    this.Esp.ledOn();
  }

  APAGAR(){
    this.Esp.ledOff();
  }
}
