import {from, of, pipe, interval, mergeMap} from 'rxjs';
const strm1 = interval(1000);

    strm1
      .pipe(
        mergeMap(
          (vMap1) => of("El stream emite -> "+vMap1)
        )
      ).subscribe(r => console.log(r));