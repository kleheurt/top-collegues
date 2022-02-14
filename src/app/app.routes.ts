import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';


export const ROUTES: Routes = [
{ path: 'accueil', component: AccueilComponent },
{ path: 'historique', component: HistoriqueVotesComponent },
{ path: 'nouveau', component: NouveauCollegueTemplateFormComponent },
{ path: 'collegue/:pseudo', component: DetailComponent},
{ path: '', pathMatch: 'full', redirectTo: '/accueil' },
{ path: '**', pathMatch: 'full', redirectTo: '/accueil' }
];
