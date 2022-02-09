import { Component, OnInit, Output } from '@angular/core';
import { CollegueService } from '../collegue.service';
import { Collegue } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  @Output() collegues:Array<Collegue> = [
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"},
    {pseudo : "Napoléon", score : 100, photoUrl: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Napoleon-Total-War-1-icon.png"}
  ];

  constructor(private collegueService: CollegueService) { }

  async ngOnInit(): Promise<any> {
    this.collegues = await this.collegueService.getCollegues();
  }


}
