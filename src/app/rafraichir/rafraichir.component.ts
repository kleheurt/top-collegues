import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rafraichir',
  templateUrl: './rafraichir.component.html',
  styleUrls: ['./rafraichir.component.scss']
})
export class RafraichirComponent implements OnInit {

  constructor(private collegueService:DataService) { }

  ngOnInit(): void {
    this.rafraichir();
  }

  rafraichir(){
    this.collegueService.rafraichirCollegues();
  }

}
