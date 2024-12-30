const reverseString = function(s) {
    sList= []

    for (let letter of s) {
        sList.push(letter)
    }
    reversed = sList.reverse()
    return reversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
