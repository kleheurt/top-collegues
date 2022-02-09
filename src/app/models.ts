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

export enum Avis{
  AIMER=100,
  DETESTER=-100
}
