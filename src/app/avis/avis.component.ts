import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() avis = new EventEmitter<Avis>();
  @Input() aimable!:boolean;
  @Input() detestable!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  aimer(){
    this.avis.emit(Avis.AIMER);
  }

  detester(){
    this.avis.emit(Avis.DETESTER);
  }


}
