import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conjuguer'
})
export class ConjuguerPipe implements PipeTransform {

  transform(avis: string, ...args: unknown[]): string {
    return avis == "AIMER" ? "aimé" : "détesté";
  }

}
