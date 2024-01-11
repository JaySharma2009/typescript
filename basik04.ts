//interfacial merge

interface Person {
  name: string;
  age: number;
}

interface Person { // interface Person is merged with the below interface Person
    empCode: number;
    }

let empObj1: Person = {
    empCode: 1,
    name: "Steve",
    age: 21,
};
