'use strict';

var isNegativeZero = require( './../lib' );

console.log( isNegativeZero( -0 ) );
// returns true

console.log( isNegativeZero( 0 ) );
// returns false

console.log( isNegativeZero( '' ) );
// returns false

console.log( isNegativeZero( null ) );
// returns false
