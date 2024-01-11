// interfacial extend

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  empCode: number;
}

let empObj: Employee = {
  empCode: 1,
  name: "Steve",
  age: 21,
};

console.log(empObj);
