'use strict';

/**
* FUNCTION: isNegativeZero( value )
*	Validates if a value is negative zero.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is negative zero
*/
function isNegativeZero( value ) {
	return value === 0 && 1/value === Number.NEGATIVE_INFINITY;
} // end FUNCTION isNegativeZero()


// EXPORTS //

module.exports = isNegativeZero;
