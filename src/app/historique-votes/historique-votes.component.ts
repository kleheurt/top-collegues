import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Vote } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  votes: Observable<Array<Vote>>;

  constructor(private voteService:DataService) {
    this.votes = this.voteService.listerVotes();
  }

  ngOnInit(): void {
  }

}
