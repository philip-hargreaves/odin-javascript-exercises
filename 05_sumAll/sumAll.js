const sumAll = function(a, b) {
    result = 0;

    if (!(Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0)) {
        return "ERROR"
    }

    let start = Math.min(a, b);
    let end = Math.max(a, b);

    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
