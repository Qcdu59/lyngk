'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testA = function(){
    var c = new Lyngk.Coordinates("A",1);
    assertFalse(c.check());
};

LyngkTestCase.prototype.testB = function(){
    var c = new Lyngk.Coordinates();
    assertFalse(c.check43());
}