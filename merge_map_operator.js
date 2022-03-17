import {from, of, pipe, map, interval, mergeMap, timer, take} from 'rxjs';
const strm1 = interval(1000);
const strm2 = of("El stream emite -> ");

//MergeMap es un operador nos permite unificar en un solo Observable dos flujos de datos, haciendo que de dos entradas obtengamos una salida “mergeada”.

// al final es como si dijeras Cuando se emita el strm1 que se emita también el strm2
    strm1
      .pipe(
        mergeMap(
          (valor1) => strm2.pipe(map(valor2 => valor2+valor1))
        )
      ).subscribe(r => console.log(r));


      /**
       * vamos a emular un click cada 1s(1000ms), pero vamos a controlar las llamadas asíncronas y solo permitiremos coger cinco de ellas simultaneamente. 
       * Posteriormente, conforme vayan terminando unas, irán entrando otras, pero siempre como máximo activas cinco. 
       * El primer código muestra esta funcionalidad, pero como observaras solo muestra información por la consola cuando termina una tarea.
       */
      const obs1 = interval(1000);
      const obs2 = timer(5000);
  
      obs1
        .pipe(
          mergeMap(
            (vMap1) => obs2.pipe(map(w=>"Hilo terminado -> " + vMap1)),
            5
          )
        ).subscribe(r => console.log(r));


        /**
         * Vamos a modificar este ejemplo para hacerlo algo mas visual. Mientras un hilo está activo, 
         * este irá informando por consola hasta que termina y para que pueda ser mas trazable, 
         * vamos a permitir una concurrencia de solo dos hilos.
         */
    const obs3 = interval(1000);
    const obs4 = timer(5000);
  //cada 5 segundos aparecen 2 hilos
      obs3
      .pipe(
        mergeMap(
          (vMap1) => obs4.pipe(map(w=>"Hilo Extra trabajando -> " + vMap1), take(5)), //cada 5 segundos
          2 //2 hilos a la vez únicamente
        )
      ).subscribe(r => console.log(r));