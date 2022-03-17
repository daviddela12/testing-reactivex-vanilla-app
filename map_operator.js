import {from, pipe, map} from 'rxjs';

// Con RxJS al final se tratan los datos como si se devolviera un observable. Al subscribirnos podemos realizar acciones por cada elemento de ese 'from' definido
// En este caso simplemente hacemos un consolelog del valor
const list = from([1, 2, 3, 4, 5]); // productor del observable
 
list.subscribe(valor => console.log(valor)) // consumidor del observable


// Obtener el doble de cada valor
list.pipe(
    map(valor => valor * 2)
).subscribe(
    valor => console.log(valor)
)

// Obtener sólo un atributo concreto de todos los que tenga el objeto
const people = [
    {nombre: "Pepe", apellidos: "Galán"},
    {nombre: "David", apellidos: "Galán2"},
    {nombre: "José", apellidos: "Galán3"},
]
const peopleFrom = from(people);
peopleFrom.pipe(
    map(person => person.nombre)
).subscribe(
    person => console.log(person) //return Pepe David José
)