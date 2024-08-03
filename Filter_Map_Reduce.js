const array = [1, 2, 3, 4];

// ใช้ filter เพื่อเก็บเฉพาะค่าที่เป็นเลขคู่
const evenNumbers = array.filter(value => value % 2 === 0);

// ใช้ map เพื่อคูณค่าทุกค่าด้วย 2
const doubledNumbers = evenNumbers.map(value => value * 2);

// ใช้ reduce เพื่อหาผลรวมของค่าทั้งหมด
const sum = doubledNumbers.reduce((sum, value) => sum + value, 0);



console.log('Even numbers:', evenNumbers); // [2, 4]
console.log('Doubled numbers:', doubledNumbers); // [4, 8]
console.log('Sum of doubled numbers:', sum); // 12


