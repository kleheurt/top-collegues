import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() avis:EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() collegue!:Collegue;

  constructor() { }

  ngOnInit(): void {
  }

  aimer(){
    this.avis.emit(Avis.AIMER);
  }

  detester(){
    this.avis.emit(Avis.DETESTER);
  }

  aimable(){
    return this.collegue.score > 1000;
  }

  detestable(){
    return this.collegue.score < -1000;
  }

}
