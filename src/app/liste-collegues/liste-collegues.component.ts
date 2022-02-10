import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from '../data.service';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  collegues:Observable<Array<Collegue>>;

  @Input() rafraichirSubject!: Subject<boolean>;

  constructor(private collegueService: DataService) {
    this.collegues = this.collegueService.listerCollegues();
  }

  ngOnInit(): void {
    this.rafraichirSubject.subscribe(() => {
      this.collegues = this.collegueService.listerCollegues();
    });
  }



}
