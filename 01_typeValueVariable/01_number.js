// Integer Literal 
console.log(2);
console.log(0xff);
//Floating Point Literal
console.log(2.34);
console.log(2e10);

console.log(Math.pow(2,3));
console.log(Math.round(3.2));
console.log(Math.ceil(4.7));

console.log(Number.POSITIVE_INFINITY);
console.log( Number.NEGATIVE_INFINITY);
console.log( Number.MAX_VALUE );
console.log( Number.MIN_VALUE);
console.log( 1 / 0); //Infinity
console.log( -1 / 0);// -Infinity
console.log( Number.NaN);//NaN

console.log( 0 == -0);
console.log(0 === -0);
console.log( NaN == NaN);
console.log( Number.isNaN(NaN));
console.log( Number.isFinite(Infinity));
console.log( Number.isInteger(2.3));

console.log(0.3 - 0.2);//rounding error

console.log(10n - 4n);
console.log(10 < 2n);//only comparison accept for bigInt and number not arithematic operation


