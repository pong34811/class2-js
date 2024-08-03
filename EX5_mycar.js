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

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

const distance = distanceInKmBetweenEarthCoordinates(
    car1.location.latitude, car1.location.longitude,
    car2.location.latitude, car2.location.longitude
);

console.log(`รถคันที่ 1 ทะเบียน :${car1.license}
    เจ้าของคือ ${car1.owner.name}
    อยู่ที่ตำเเหน่ง ${car1.location.latitude},${car1.location.longitude}
`
)
console.log(`รถคันที่ 2 ทะเบียน :${car2.license}
    เจ้าของคือ ${car2.owner.name}
    อยู่ที่ตำเเหน่ง ${car2.location.latitude},${car2.location.longitude}
`
)
console.log("Distance between car1 and car2 (in KM):", distance);

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    const earthRadiusKm = 6371;

    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
}

// Example calculation distance from Phuket to Bangkok (in KM)

