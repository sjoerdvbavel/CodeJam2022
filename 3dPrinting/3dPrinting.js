const fs = require('fs');
var rawDataSet = [];
var rawBlob = fs.readFileSync(0, 'utf8').toString();
if (rawBlob.includes('\r\n')) {
    rawDataSet = rawBlob.split("\r\n");
} else {
    rawDataSet = rawBlob.split("\n");
}
let T = parseInt(rawDataSet[0]);
let arrays = rawDataSet.slice(1).map(x => x.split(' ').map(y => parseInt(y)));

function execute(index, numArrays) {
    //Get the intersection of printer colors.
    let mins = [Infinity, Infinity, Infinity, Infinity];
    for (printer of numArrays) {
        for (ind = 0; ind < 4; ind += 1) {
            mins[ind] = printer[ind] < mins[ind] ? printer[ind] : mins[ind];
        }
    }
    minsum = mins.reduce((a, b) => a + b);
    if (minsum < Math.pow(10, 6)) {
        console.log(`Case #${index}: IMPOSSIBLE`);
    } else {
        //Find a specific solution
        solution = [0, 0, 0, 0];
        for (ind = 0; ind < 4; ind += 1) {
            solsum = solution.reduce((a, b) => a + b);
            if (solsum + mins[ind] < Math.pow(10, 6)) {
                solution[ind] = mins[ind];
            } else {
                solution[ind] = Math.pow(10, 6) - solsum;
                break;
            }
        }
        console.log(`Case #${index}: ` + solution.join(' '));
    }
}

for (let i = 1; i <= T; i++) {
    execute(i, arrays.slice(3 * (i - 1), 3 * (i)));
}