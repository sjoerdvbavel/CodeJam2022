const fs = require('fs');
const rawDataSet = fs.readFileSync(0, 'utf8').toString().split("\n");
let T = parseInt(rawDataSet[0]);


function execute(r, c) {
    console.log();
}

for (let i = 1; i <= T; i++) {
    console.log(`Case #${i}:`);
    numbers = rawDataSet[i].split(' ');
    execute(...numbers);
}