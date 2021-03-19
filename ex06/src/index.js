var myArray = [
    [2],
    [5, 6, 7],
    [8, 9]
];

function multiplyArrayFunction(myArray) {
    var newMyArray = [...myArray];
    var product = 1;
    var sum = 0;
    for (var i = 0; i < newMyArray.length; i++) {
        for (var j = 0; j < newMyArray[i].length; j++) {
            sum = sum + newMyArray[i][j];
            product = product * newMyArray[i][j];
        }
    }

    return [product, sum];
}

console.log(multiplyArrayFunction(myArray));
module.exports = multiplyArrayFunction;