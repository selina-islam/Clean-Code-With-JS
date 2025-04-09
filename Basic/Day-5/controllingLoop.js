// Controlling loops with break(stop) and continue(skip)

// stop when a number equals 3
for (let i = 1; i <= 5; i++){
        if (i === 3) {
                break;
        }
        console.log(i) // 1,2
}

for (let i = 1; i <= 5; i++){
        if (i === 3) {
                continue;
        }
        console.log(i) // 1,2,4,5
}