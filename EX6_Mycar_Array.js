const person = {
    name: "waritnan",
    age: 23
};


const car1 = {
    brand: "hhhh",
    license: "1234",
    owner: person,
    location: {
        latitude: 7.951933,  // Example coordinates
        longitude: 98.338089
    }
};
const car2 = {
    brand: "ggg",
    license: "5678",
    owner: person,
    location: {
        latitude: 8.195595,  // Example coordinates
        longitude: 98.297082
    }
};

const cars = [car1, car2];

// Loop through each car object in the array
for (let c of cars) {
    console.log(c.license);  // Print only the license property
}
