import {from, pipe, filter} from 'rxjs';
const people = [
  {nombre: "Pepe", apellidos: "Galán"},
  {nombre: "David", apellidos: "Galán2"},
  {nombre: "José", apellidos: "Galán3"},
]
console.log(people);

// Functional programming
const nombres = people.filter((person) => person.nombre === "David");
console.table(nombres);

// Reactive programming
const peopleFrom = from(people);
peopleFrom.pipe(
  filter(person => person.name === 'David')
).subscribe(
  person => console.table(person)
)

