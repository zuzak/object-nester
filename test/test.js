var assert = require( 'assert' );
var nobj = require( '..' );

describe( 'create', function () {
	it( 'should return a nested object', function () {
		var obj = {
			a: {
				b: {
					c: 1
				}
			}
		};

		assert.equal( obj.a.b.c, nobj.create( {}, [ 'a', 'b', 'c' ], 1 ) );

	} );
} );
