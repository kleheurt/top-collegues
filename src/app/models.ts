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
  DETESTER=-100,
  STOP_AIMER = 1000,
  STOP_DETESTER = -1000
}
