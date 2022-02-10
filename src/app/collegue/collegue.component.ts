import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue!: Collegue;

  constructor() { }

  ngOnInit(): void {
  }

  traiterAvis(val: number){
    this.collegue.score += val;

  }

  estAimable(){
    return this.collegue.score > Avis.STOP_AIMER;
  }

  estDetestable(){
    return this.collegue.score < Avis.STOP_DETESTER;
  }


}
