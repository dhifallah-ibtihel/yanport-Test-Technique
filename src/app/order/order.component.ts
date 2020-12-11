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
  public x1!: Number;
  public y1!: Number;
  public x!: Number;
  public y!: Number;
  public x_final!:Number;
  public y_final!:Number;
  public set="";
  public direction = "";
  public instruction="";
  constructor( private gridwidth:GridwidthService, private pos:IntialPositionService, private inst:InstructionService) {
    
  }

  
  ngOnInit() {
    this.pos.currentmessage.subscribe(message => this.set=message )
    this.gridwidth.currentmessage.subscribe(message => [this.y1,this.x1] = message);
    
    this.inst.currentmessage.subscribe(message => this.instruction=message );
    
  }
  
  Order(Order:string){
    switch(Order){
      case 'A' : 
         switch(this.direction){
            case 'N':
              this.y=Number(this.y)+1;
              this.direction='N';
              
              break;
            
            case 'S':
              this.y=Number(this.y)-1;
              this.direction='S';
              
              break;
            
            case 'E':
              this.x=Number(this.x)+1;
              this.direction='E';
              
              break;
            case 'W':
              this.x=Number(this.x)-1;
              this.direction='W';
              
              break;
            }
           break; 
      case 'D' : 
         switch(this.direction){
            case 'N':
              this.y=Number(this.y)+1;
              this.direction='W';
              
              //this.x=Number(this.x)-1;
              break;
            
            case 'S':
              this.y=Number(this.y)-1;
              this.direction='E';
              
              //this.x=Number(this.x)+1;
              
              break;
            
            case 'E':
              this.x=Number(this.x)+1;
              this.direction='N';
              
              //this.x=Number(this.y)+1;
              break;
              
            case 'W':
              this.x=Number(this.x)-1;
              this.direction='S';
              
              //this.y=Number(this.y)-1;
              break;
              
         }
         break;
         case 'G' : 
         switch(this.direction){
            case 'N':
              this.y=Number(this.y)+1;
              this.direction='E';
              
              //this.x=Number(this.x)+1;
              
              break;
            
            case 'S':
              this.y=Number(this.y)-1;
              this.direction='W';
              
              //this.x=Number(this.x)-1;
              break;
            
            case 'E':
              this.x=Number(this.x)+1;
              this.direction='S';
              
              //this.y=Number(this.y)-1;
              break;
            case 'W':
              this.x=Number(this.x)-1;
              this.direction='N';
              //this.y=Number(this.y)+1;
              
              break;
            }
        }

    }

    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }
  test1(){
    console.log(this.set)
    //Number(this.y1)-
    this.y=Number(this.set.split(" ", 3)[0].split("=",2)[1]);
    this.x=Number(this.set.split(" ", 3)[1].split("=",2)[1]);
    this.direction=this.set.split(" ", 3)[2].split("=",2)[1];
    let instructionList=Array.from(this.instruction);
    (async () => {  console.log('the before x=',this.x) ;
    for(let entry of instructionList){
          this.Order(entry)
          await this.delay(1000); 
          console.log('the after x=',this.x,'the after y=',this.y,entry)}
          alert("la position finale est x="+this.x+" y="+this.y+" orientation="+this.direction)
         

      })();
      
      

        }
       
       }
    
  
