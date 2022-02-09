import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() collegues:Array<Collegue> = [
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
