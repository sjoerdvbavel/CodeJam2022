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
    diceArray = numArrays[1].sort((a,b) => a-b);
    highestdice = diceArray[diceArray.length-1];
    // console.log(highestdice)
    // console.log(JSON.stringify(diceArray));
    maxlength = 1;
    for(start = 0; start < highestdice; start++){
        length = 0;
        for(dice of diceArray){
            if(dice > start + length){
                length++;
                // console.log(`Added dice ${dice} (${length})`);
            }
        }
        maxlength = length > maxlength?length:maxlength;
    }
    console.log(`Case #${index}: ` + maxlength);
}

for (let i = 1; i <= T; i++) {
    execute(i, arrays.slice(2 * (i - 1), 2 * (i)));
}