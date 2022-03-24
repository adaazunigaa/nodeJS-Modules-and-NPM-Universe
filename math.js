const add = (x,y) => x + y;

const PI = 3.141659;

const square = x => x * x;

const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;

// OR *******************************************
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// OR *******************************************
// exports.PI = PI;
