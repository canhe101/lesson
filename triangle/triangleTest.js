

QUnit.test("equilateral have three equal sides", function( assert ) {
	assert.equal(triangle.isEquilateral(5,5,5),true,"5,5,5 is equilateral") ;
	assert.equal(triangle.isEquilateral(0,0,0),false,"0,0,0 is equilateral") ;
	assert.equal(triangle.isEquilateral(-1,-1,-1),false,"-1,-1,-1 is equilateral") ;
	
});
QUnit.test("isosceles triangle has two equal sides", function( assert ) {
	assert.equal(triangle.isIsosceles(5,5,2),true,"5,5,2 is isosceles") ;
	assert.equal(triangle.isIsosceles(2,5,5),true,"2,5,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(5,2,5),true,"5,2,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(0,0,1),false,"0,0,1 is isosceles") ;
	assert.equal(triangle.isIsosceles(3,2,5),false,"3,2,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(-1,-1,2),false,"-1,-1,2 is isosceles") ;
});
QUnit.test("scalene triangle has three different sides", function( assert ) {
	assert.equal(triangle.isScalene(3,2,4),true,"3,2,4 is scalene") ;
	assert.equal(triangle.isScalene(1,2,6),false,"1,2,6 is scalene") ;
	
});//BIPT-09