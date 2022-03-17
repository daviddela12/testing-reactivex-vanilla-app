import {from, of, pipe, map, interval, mergeMap} from 'rxjs';
const strm1 = interval(1000);
const strm2 = of("El stream emite -> ");

    strm1
      .pipe(
        mergeMap(
          (valor1) => strm2.pipe(map(valor2 => valor2+valor1))
        )
      ).subscribe(r => console.log(r));