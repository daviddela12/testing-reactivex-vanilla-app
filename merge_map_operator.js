import {from, of, pipe, map, interval, mergeMap} from 'rxjs';
const strm1 = interval(1000);
const strm2 = of("El stream emite -> ");

//MergeMap es un operador nos permite unificar en un solo Observable dos flujos de datos, haciendo que de dos entradas obtengamos una salida “mergeada”.

// al final es como si dijeras Cuando se genere el strm1 que se genere también el strm2
    strm1
      .pipe(
        mergeMap(
          (valor1) => strm2.pipe(map(valor2 => valor2+valor1))
        )
      ).subscribe(r => console.log(r));