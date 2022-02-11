import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { VoteComponent } from './vote/vote.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { ConjuguerPipe } from './pipes/conjuguer.pipe';
import { RafraichirComponent } from './rafraichir/rafraichir.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    VoteComponent,
    HistoriqueVotesComponent,
    ConjuguerPipe,
    RafraichirComponent,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
