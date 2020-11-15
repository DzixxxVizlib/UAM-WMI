import { ofType } from 'redux-observable';
import { tap } from 'rxjs/operators';

export const epic = action$ => action$.pipe(
  ofType('TEST'),
  tap(() => {
    debugger
  })
);