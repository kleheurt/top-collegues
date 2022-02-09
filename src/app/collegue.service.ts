import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Collegue, CollegueDto } from './models';


@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  private url:string = "https://formation-angular-collegues.herokuapp.com/api/v1/collegues";

  private collegues:Array<Collegue>;

  constructor(private http: HttpClient) {
    this.collegues = new Array<Collegue>();
  }

  transform(y:CollegueDto):Collegue{
    console.log(y);
    return {pseudo:y.pseudo, photoUrl:y.photo, score:y.score};
  }

  ngOnInit(){

  }


  /** A modifier */
  async getCollegues(){
    const z = <Array<any>>await this.http.get(this.url)
      .toPromise();
    this.collegues = z.map(y => this.transform(y));
    console.log(this.collegues);
    return this.collegues;
  }
}
