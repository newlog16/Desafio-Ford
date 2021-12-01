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

var decInput = input1.split('')
for (let j = 0; j < decInput.length; j++) {
    
    console.log(parseInt(decInput[j]))
    // if (typeof(decInput[j]) = string)

}


console.log(parseInt(decInput[0]))
console.log(decInput)
console.log(input3)

