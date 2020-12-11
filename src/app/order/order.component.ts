import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { GridwidthService } from '../gridwidth.service';
import { InstructionService } from '../instruction.service';
import { IntialPositionService } from '../intial-position.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']

})
export class OrderComponent implements OnInit {
  public grid_width!: Number;
  public grid_length!: Number;
  public absciss!: Number;
  public  ordinate!: Number;
  public set="";
  public direction = "";
  public instruction="";
  constructor( private gridwidth:GridwidthService, private pos:IntialPositionService, private inst:InstructionService) {
    
  }

  
  ngOnInit() {
    this.pos.currentmessage.subscribe(message => this.set=message )
    this.gridwidth.currentmessage.subscribe(message => [this.grid_length,this.grid_width] = message);
    
    this.inst.currentmessage.subscribe(message => this.instruction=message );
    
  }
  
  Order(Order:string){
    switch(Order){
      case 'A' : 
         switch(this.direction){
            case 'N':
              this. ordinate=Number(this. ordinate)+1;
              this.direction='N';
              
              break;
            
            case 'S':
              this. ordinate=Number(this. ordinate)-1;
              this.direction='S';
              
              break;
            
            case 'E':
              this.absciss=Number(this.absciss)+1;
              this.direction='E';
              
              break;
            case 'W':
              this.absciss=Number(this.absciss)-1;
              this.direction='W';
              
              break;
            }
           break; 
      case 'D' : 
         switch(this.direction){
            case 'N':
              this. ordinate=Number(this. ordinate)+1;
              this.direction='W';
              
              
              break;
            
            case 'S':
              this. ordinate=Number(this. ordinate)-1;
              this.direction='E';
              
           
              
              break;
            
            case 'E':
              this.absciss=Number(this.absciss)+1;
              this.direction='N';
              
             
              break;
              
            case 'W':
              this.absciss=Number(this.absciss)-1;
              this.direction='S';
              
              
              break;
              
         }
         break;
         case 'G' : 
         switch(this.direction){
            case 'N':
              this. ordinate=Number(this. ordinate)+1;
              this.direction='E';
              
              
              
              break;
            
            case 'S':
              this. ordinate=Number(this. ordinate)-1;
              this.direction='W';
              
             
              break;
            
            case 'E':
              this.absciss=Number(this.absciss)+1;
              this.direction='S';
              
             
              break;
            case 'W':
              this.absciss=Number(this.absciss)-1;
              this.direction='N';
             
              
              break;
            }
        }

    }

    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }
  Clean(){
    this. ordinate=Number(this.set.split(" ", 3)[0].split("=",2)[1]);
    this.absciss=Number(this.set.split(" ", 3)[1].split("=",2)[1]);
    this.direction=this.set.split(" ", 3)[2].split("=",2)[1];
    let instructionList=Array.from(this.instruction);
    (async () => {  ;
    for(let entry of instructionList){
          this.Order(entry)
          await this.delay(1000); 
          }
          alert("la position finale est x="+this.absciss+" y="+this. ordinate+" orientation="+this.direction)
         

      })();
      
      

        }
       
       }
    
  
