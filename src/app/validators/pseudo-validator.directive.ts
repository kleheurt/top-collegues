import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { DataService } from '../data.service';

@Directive({
  selector: '[appPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective,
    multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator{

  constructor(private service: DataService) { }

  validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    if(control.value){
      return this.service.collegueParPseudo(control.value)
        .pipe(
          map(() => ({pseudoTrouve : true})),
          catchError(() => of(null))
        );

    }
    return of(null);
  }

}
