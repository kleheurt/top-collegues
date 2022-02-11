import { Component, Input, OnInit } from '@angular/core';
import { Vote } from '../models';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  visible = true;

  @Input() vote?: Vote;

  constructor() { }

  ngOnInit(): void {
  }

  supprimer(){
    this.visible = false;
  }

}
