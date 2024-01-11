// unions and narrowing

let a: string | number;

function printA (id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printA("basik");