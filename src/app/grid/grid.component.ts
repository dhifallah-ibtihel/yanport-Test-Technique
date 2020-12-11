import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service'
import { GridwidthService } from '../gridwidth.service';
@Component({
  selector: 'app-grid-model',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
   
  message="";
  x=0;
  y=0;

  constructor(private data:DataServiceService, private router:Router,private gridwidth:GridwidthService) { 
    
   

  }

  ngOnInit() {
    this.data.currentmessage.subscribe(message => this.message = message);
    
  }
  
  Test(){
    this.x = Number(this.message.split(" ", 2)[0].split("=",2)[1]);
    this.y = Number(this.message.split(" ",2)[1].split("=",2)[1]);
    this.gridwidth.changeMessage([this.x,this.y]);
    console.log(this.x);
    console.log(this.y);
    this.router.navigate(['/Order'])
  }

}
