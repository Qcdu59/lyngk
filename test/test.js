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

LyngkTestCase.prototype.testD = function(){
    var c = new Lyngk.Coordinates('A',1);
    assertTrue(c.toString() === 'invalid');
}

LyngkTestCase.prototype.testE = function(){
    var c = new Lyngk.Coordinates('A',3);
    var clone = c.clone();
    assertTrue(c.toString() === clone.toString());
}

LyngkTestCase.prototype.testF = function(){
    var c = new Lyngk.Coordinates('B',4);
    var hash = c.hash();
    assertTrue(hash === 24);
}

LyngkTestCase.prototype.testG = function(){
    var c = new Lyngk.Intersection();
    assertEquals(c.getState(),0);
}

LyngkTestCase.prototype.testH = function(){
    var c = new Lyngk.Intersection('B',2);
    c.ajoutPiece(Lyngk.Color.BLUE);
    assertTrue(c.getState() === Lyngk.State.ONE_PIECE && c.getColorInter() === Lyngk.Color.BLUE);
}

LyngkTestCase.prototype.testI = function(){
    var c = new Lyngk.Intersection('B',2);
    c.ajoutPiece(Lyngk.Color.BLUE);
    c.ajoutPiece(Lyngk.Color.RED);
    assertTrue(c.getState() === Lyngk.State.STACK && c.getColorInter() === Lyngk.Color.RED);
}

LyngkTestCase.prototype.testJ = function(){
    var c = new Lyngk.Intersection('B',2);
    c.ajoutPiece(Lyngk.Color.BLUE);
    c.ajoutPiece(Lyngk.Color.RED);
    c.ajoutPiece(Lyngk.Color.GREEN);
    c.ajoutPiece(Lyngk.Color.WHITE);
    c.ajoutPiece(Lyngk.Color.BLACK);
    assertTrue(c.getState() === Lyngk.State.FULL_STACK);
}

LyngkTestCase.prototype.testHist11 = function () {
    var jeu = new Lyngk.Engine();
    var cpt_one_piece=0;
    for(var i=0;i<jeu.plateau.size();i++) {
        jeu.plateau[i].ajoutPiece(Lyngk.Color.BLUE);
        if (jeu.plateau[i].getState() == Lyngk.State.ONE_PIECE){
            cpt_one_piece++;
            }
        }
    assertTrue(cpt_one_piece==43);
}