const array = [4, 7, 5, 3];

console.log(
    array.reduce((max, value) => value > max ? value : max, 0 )
)
