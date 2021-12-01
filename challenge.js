var input = require('fs').readFileSync('stdin', 'utf8');

separated = input.split('');

input1 = [];
input2 = [];
input3 = [];

for (let i = 0; i < separated.length; i++) {
    if (i < 3) {
        input1 = input1 + separated[i]
    } else
    if (i < 9) {
        input2 = input2 + separated[i]
    } else
    if (i < 16) {
        input3 = input3 + separated[i]
    }
    console.log(separated[i])


}


console.log(input1)
console.log(input2)
console.log(input3)

