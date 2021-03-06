export interface Collegue{
  pseudo:string;
  score:number;
  photoUrl:string;
}

export interface CollegueDto{
  pseudo:string,
  score:number,
  photo:string
}

export interface CollegueVote{
  pseudo:string,
  score:number,
  photo:string,
  prenom:string
}

export interface CreerCollegueDto{
  nom:string,
  photo:string,
  prenom:string,
  pseudo:string
}

export interface DetailCollegue{
  nom:string,
  prenom:string,
  photo:string,
  pseudo:string,
  score:number
}

export enum Avis{
  AIMER=100,
  DETESTER=-100,
  STOP_AIMER = 1000,
  STOP_DETESTER = -1000
}

export interface VoteDto{
  avis:string;
  pseudo:string;
}

export interface Vote{
  avis:string;
  collegue:CollegueVote;
  score:number;
}

export enum AvisDto{
  "AIMER", "DETESTER"
}
