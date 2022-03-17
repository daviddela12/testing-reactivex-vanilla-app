import {from, pipe, filter} from 'rxjs';
const people = [
  {nombre: "Pepe", apellidos: "Galán"},
  {nombre: "David", apellidos: "Galán2"},
  {nombre: "José", apellidos: "Galán3"},
]
console.log("ARRAY DE PEOPLE");
console.log(people);

// Functional programming
console.log("FUNCTIONAL PROGRAMMING");
const nombres = people.filter((person) => person.nombre === "David");
console.table(nombres);

// Reactive programming
console.log("REACTIVE PROGRAMMING");
const peopleFrom = from(people);
peopleFrom.pipe(
  filter(person => person.nombre === "David")
).subscribe(
  person => {
    console.table(person);
  }
)

