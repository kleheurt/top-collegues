import { Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Avis, Collegue, VoteDto } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue!: Collegue;
  urlDetail: string = "";

  constructor(private collegueService:DataService) { }

  ngOnInit(): void {
    this.urlDetail = "/collegue/"+this.collegue.pseudo;
  }

  traiterAvis(val: number){
    this.collegue.score += val;
    const vote:VoteDto = {avis:(val > 0 ? "AIMER" : "DETESTER"), pseudo:this.collegue.pseudo};
    this.collegueService.voter(vote).subscribe(x => console.log(x));
  }

  estAimable(){
    return this.collegue.score > Avis.STOP_AIMER;
  }

  estDetestable(){
    return this.collegue.score < Avis.STOP_DETESTER;
  }


}
