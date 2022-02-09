import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue!: Collegue;
  @Output() limiteScore:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  traiterAvis(val: number){
    this.collegue.score += val;
    if(this.collegue.score > 1000) this.limiteScore.emit(true);
    if(this.collegue.score < -1000) this.limiteScore.emit(false);
  }



}
