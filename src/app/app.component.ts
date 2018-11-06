import { Component,OnInit } from '@angular/core';
import { EspService } from '../services/esp.service';

@Component({
  selector: 'app-root',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})

export class AppComponent implements OnInit {
  
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

  /**/

