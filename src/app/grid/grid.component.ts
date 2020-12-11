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
  grid_width=0;
  grid_length=0;

  constructor(private data:DataServiceService, private router:Router,private gridwidth:GridwidthService) { 
    
   

  }

  ngOnInit() {
    this.data.currentmessage.subscribe(message => this.message = message);
    
  }
  
  Start(){
    this.grid_width = Number(this.message.split(" ", 2)[0].split("=",2)[1]);
    this.grid_length = Number(this.message.split(" ",2)[1].split("=",2)[1]);
    this.gridwidth.changeMessage([this.grid_width,this.grid_length]);
    this.router.navigate(['/Order'])
  }

}
