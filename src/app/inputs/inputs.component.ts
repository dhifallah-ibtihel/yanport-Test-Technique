import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { InstructionService } from '../instruction.service';
import { IntialPositionService } from '../intial-position.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
 public Dimension_de_la_grille="";
 public Position_initiale_de_laspirateur="";
 public Instructions="";
  constructor(private data:DataServiceService,private router:Router,private pos:IntialPositionService, private inst:InstructionService) { }

  ngOnInit() {
    this.data.currentmessage.subscribe( message => this.Dimension_de_la_grille = message);
    this.pos.currentmessage.subscribe( message => this.Position_initiale_de_laspirateur = message);
    this.inst.currentmessage.subscribe( message => this.Instructions = message);
  }

  savePropreties(){
    this.data.changeMessage(this.Dimension_de_la_grille);
    this.pos.changeMessage(this.Position_initiale_de_laspirateur);
    this.inst.changeMessage(this.Instructions);
    this.router.navigate(['/Grid'])
  }

}
