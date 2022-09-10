// let lucky;

// lucky = "23";
// lucky = 23;

// type Style = "bold" | "italic";

// let font: Style;
//////////////////////////////////////
interface Person {
  first: string;
  last: string;
  fast: boolean;
}

const person: Person = {
  first: "Kent",
  last: "Juan",
};

const person2: Person = {
  first: "Kristine",
  last: "Juan",
  fast: true,
};
/////////////////////
// function pow(x: number, y: number): void {
//   Math.pow(x, y).toString();
// }

// pow("23", 10);
/////////////////////////////

type MyList = [number?, string?, boolean?];
const arr: MyList = [];
arr.push(1);
arr.push("23");
arr.push(true);

////////////////
// Generics
class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);
