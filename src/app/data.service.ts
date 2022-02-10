import { Injectable } from '@angular/core';
import { Observable, throwError, pipe, map} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Collegue, CollegueDto, Vote, VoteDto } from './models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string = "https://formation-angular-collegues.herokuapp.com/api/v1/collegues";
  private urlVote:string = "https://formation-angular-collegues.herokuapp.com/api/v1/votes";

  constructor(private http: HttpClient) {
  }

  toCollegue(y:CollegueDto):Collegue{
    return {pseudo:y.pseudo, photoUrl:y.photo, score:y.score};
  }

  ngOnInit(){

  }

  listerCollegues(): Observable<Array<Collegue>>{
      return this.http.get<Array<CollegueDto>>(this.url)
        .pipe(map(x => x.map(y => this.toCollegue(y))));
  }

  voter(vote:VoteDto): Observable<VoteDto>{
    console.log("postage");
    return this.http.post<VoteDto>(this.urlVote,vote);
  }

  listerVotes(): Observable<Array<Vote>>{
    return this.http.get<Array<Vote>>(this.urlVote);
  }
}
