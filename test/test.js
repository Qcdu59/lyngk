'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testA = function(){
    var c = new Lyngk.Coordinates('A',1);
    assertFalse(c.check());
};

LyngkTestCase.prototype.testB = function(){
    var compteur = 0;
    var lettre = ['A','B','C','D','E','F','G','H','I'];

    for (var i = 0 ; i<lettre.length; i++) {
        for (var j = 1; j < 10; j++) {
            var c = new Lyngk.Coordinates(lettre[i],j);
            if (c.check()) {
                compteur++;
            }
        }
    }
    assertTrue(compteur === 43);
}

LyngkTestCase.prototype.testC = function(){
    var c = new Lyngk.Coordinates('A',3);
    assertEquals(c.toString(), 'A3');
}