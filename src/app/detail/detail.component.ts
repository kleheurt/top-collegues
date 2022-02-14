import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { DetailCollegue } from '../models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  collegue?: Observable<DetailCollegue>;

  constructor(private aRoute: ActivatedRoute, private collegueService: DataService) {
    const pseudo = aRoute.snapshot.paramMap.get("pseudo");
    if(pseudo){
      this.collegue = this.collegueService.collegueParPseudo(pseudo);
    }
  }

  ngOnInit(): void {

  }

}
