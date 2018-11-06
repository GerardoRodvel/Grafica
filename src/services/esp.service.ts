import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class EspService {
    constructor(public afDB: AngularFireDatabase) {
    }
    public lineChartData:Array<any>;
    public lineChartLabels:Array<any>;
    public lineChartOptions:any={ responsive:true};
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    public datos1;
    public datos2;
    public datos3;
    public datos4;
    public datos5;
    public datos6;
    public datos7;

    
    public ledOn() {
        return this.afDB.database.ref().child('LED_STATUS').set(1);
    }
    public ledOff() {
        return this.afDB.database.ref().child('LED_STATUS').set(0);
    } 
    

    public escuchar(){
     
         var tabla = this.afDB.database.ref('GraficaLinea/');
        

         tabla.on('value',  (snapshot) => {

             this.datos1 = snapshot.child('datos1/0').val();
             this.datos1 = parseFloat(this.datos1);
            
            
             this.datos2 = snapshot.child('datos1/1').val();
             this.datos2 = parseFloat(this.datos2);

             this.datos3 = snapshot.child('datos1/2').val();
             this.datos3 = parseFloat(this.datos3);

             this.datos4 = snapshot.child('datos1/3').val();
             this.datos4 = parseFloat(this.datos4);

             this.datos5 = snapshot.child('datos1/4').val();
             this.datos5 = parseFloat(this.datos5);

             this.datos6 = snapshot.child('datos1/5').val();
             this.datos6 = parseFloat(this.datos6);

             this.datos7 = snapshot.child('datos1/6').val();
             this.datos7 = parseFloat(this.datos7);
            
             console.log( this.datos1,this.datos2,this.datos3,this.datos4,this.datos5,this.datos6,this.datos7 );
             this.lineChartData = [
                    { data: [this.datos1, this.datos2, this.datos3, this.datos4, this.datos5,this.datos6,this.datos7], label: 'Horchata' },
                    
            ];   
         
         });
      
        

         this.lineChartData = [
            { data: [this.datos1, this.datos2, this.datos3, this.datos4, this.datos5, this.datos6, this.datos7], label: 'Horchata' },
            
            
        ];
       this.lineChartLabels=['enero','febrero','marzo','abril','mayo','junio','julio']

         
    }

    

 }

