function createUser (name,age){
    return{
        name: name,
        age: age,
    }
}

let user = createUser('Waritnan', 23)
console.log(`Name: ${user.name} with age : ${user.age}`);