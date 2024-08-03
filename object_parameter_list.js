let user = {
    name: 'John',
    age: 30
}

for(param in user){
    console.log(`Param : ${param} Value : ${user[param]}`);
}

let user1 ={name: 'John' , age: 30}

console.log(Object.entries(user1));