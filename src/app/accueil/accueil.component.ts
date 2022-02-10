import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  rafraichirSubject:Subject<boolean>;

  constructor() {
    this.rafraichirSubject = new Subject<boolean>();
  }

  ngOnInit() {
  }

  rafraichir(){
    this.rafraichirSubject.next(true);
  }



}
