import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CreerCollegueDto } from '../models';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue:CreerCollegueDto = {nom:"",photo:"", prenom:"", pseudo:""};

  constructor(private collegueService:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.collegueService.creerCollegue(this.collegue).subscribe(x => console.log(x));
    this.collegue = {pseudo:"", photo:"", nom:"", prenom:""};
    this.router.navigate(['accueil']);
  }


}
