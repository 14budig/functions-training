// TODO: add your solutions here!

function combineWords(word1, word2) {
    console.log(word1 + word2);
    return word1 + word2;
}

function repeatPhrase(phrase, n) {
    for(var i = n; i > 0; i--){
        console.log(phrase);
        return phrase;
    }
}

function toTheNthPower(number, power) {
    var output = number;
    for(var i = 1; i < power; i++){
        output *= number;
    }
    console.log(output);
    return output;
}

function areaOfACircle(radius) {
    console.log(Math.PI * 2 * radius);
    return Math.PI * 2 * radius;
}

function pythagoreanTheorem(a, b) {
    var sumSquare = (a * a) + (b * b);
    console.log(Math.sqrt(sumSquare));
    return Math.sqrt(sumSquare);
}

function isXEvenlyDivisibleByY(x, y) {
    if(x%y === 0){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
        }
}

function countVowels(word) {
    word = word.toLowerCase();
    var count = 0;
    for(var i = 0; i < word.length; i++){
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'y'){
            count++;
        }
    }
    console.log(count);
    return count;
}

function findWdi(arr){
    if(arr.indexOf('wdi') >= 0){
        console.log(true);
        return true;
        }
        else{
            console.log(false);
                    return false;
    }
}

function printTriangle(length) {
    var rows = "";
    for(var i = 1; i <= length; i++){
        rows += '*';
        console.log(rows);
    }
}

function printPyramid(length) {
    for(var i = 1; i <= length; i++){
        var outputRow = "";
        for(var j = length - i; j > 0; j--){
            outputRow += " ";
        }
        for(var k = 1; k <= i; k++){
            outputRow += " *";
        }
        console.log(outputRow);
    }
}
