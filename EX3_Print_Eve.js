function printeven(max) {
    result = [];
    for (let i = 1; i <= max; i++) {
        if (i % 2 === 0) {
            console.log(i);
            result.push(i);
        }
    }
    console.log(result.join(", "));
}

// ทดสอบฟังก์ชันด้วยการส่งค่า 7
printeven(7); // จะแสดงผล: 2, 4, 6
