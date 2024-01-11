//types in typescript

type user ={
    name:string;
    age:number;
    occupation:string;
    address:string;
}

let user1:user ={
    name:"basik",
    age:20,
    occupation:"student",
    address:"bangalore"
}

function login (userdata:user):user{
    return userdata;
}

login(user1);