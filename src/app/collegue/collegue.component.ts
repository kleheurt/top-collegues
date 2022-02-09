import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue!: Collegue;

  constructor() { }

  ngOnInit(): void {
    this.collegue = {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"};
  }

  traiterAvis(val: number){
    this.collegue.score += val;
  }

}
