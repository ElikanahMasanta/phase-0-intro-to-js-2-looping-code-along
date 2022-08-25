// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "birthday"))

var countdown = function countdown(i) {
    //loop while the passed in parameter "i" is >= 0
    while (i >= 0) {
        //return a space concatenated with the value of i
        //and call the countdown function again (by
        //concatenating the result) to continue counting down
        return ' ' + i + countdown(i -= 1);
    }
    return ''; //out of loop, return an empty string
};
console.log(countdown(10))