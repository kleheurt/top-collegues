import { Injectable } from '@angular/core';
import { Observable, throwError, pipe, map, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Collegue, CollegueDto, CreerCollegueDto, Vote, VoteDto } from './models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string = "https://formation-angular-collegues.herokuapp.com/api/v1/collegues";
  private urlVote:string = "https://formation-angular-collegues.herokuapp.com/api/v1/votes";

  private collegueSubject:Subject<Array<Collegue>> = new Subject<Array<Collegue>>();

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
    return this.http.post<VoteDto>(this.urlVote,vote);
  }

  listerVotes(): Observable<Array<Vote>>{
    return this.http.get<Array<Vote>>(this.urlVote);
  }

  abonner(){
    return this.collegueSubject.asObservable();
  }

  rafraichirCollegues(){
    this.collegueSubject.next(new Array());
    this.listerCollegues().subscribe(x => this.collegueSubject.next(x));
  }

  creerCollegue(collegue: CreerCollegueDto): Observable<CreerCollegueDto>{
    return this.http.post<CreerCollegueDto>(this.url,collegue);
  }
}
