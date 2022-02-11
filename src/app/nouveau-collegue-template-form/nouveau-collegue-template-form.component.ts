import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Collegue, CreerCollegueDto } from '../models';
import { NomPrenomValidatorDirective } from '../validators/nom-prenom-validator.directive';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue:CreerCollegueDto = {nom:"",photo:"", prenom:"", pseudo:""};

  constructor(private collegueService:DataService) { }

  ngOnInit(): void {
  }

  submit(){
    this.collegueService.creerCollegue(this.collegue).subscribe(x => console.log(x));
    this.collegue = {pseudo:"", photo:"", nom:"", prenom:""};
  }

}
