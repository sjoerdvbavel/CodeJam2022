const fs = require('fs');
const rawDataSet = fs.readFileSync(0, 'utf8').toString().split("\n");
let T = parseInt(rawDataSet[0]);

// console.log(T);
// console.log(JSON.stringify(rawDataSet));
function execute(r, c) {
    for (i = 0; i < r; i += 1) {
        r1 = '';
        r2 = '';
        for (j = 0; j < c; j += 1) {
            if (j == 0 && i == 0) {
                r1 = '..';
                r2 = '..';
            } else {
                r1 += '+-';
                r2 += '|.';
            }
        }
        r1 += '+';
        r2 += '|';
        console.log(r1);
        console.log(r2);
    }
    rl = '';
    for (j = 0; j < c; j += 1) {
        rl += '+-';
    }
    rl += '+';
    console.log(rl);
}

for (let i = 1; i <= T; i++) {
    console.log(`Case #${i}:`);
    numbers = rawDataSet[i].split(' ');
    execute(...numbers);
}