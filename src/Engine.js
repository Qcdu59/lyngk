"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var plateau = [];

    this.Init_plateau = function() {

        var valide =['C1',
            'E2','D2','C2','B2',
            'G3','F3','E3','D3','C3','B3','A3',
            'G4','F4','E4','D4','C4','B4',
            'H5','G5','F5','E5','D5','C5','B5',
            'H6','G6','F6','E6','D6','C6',
            'I7','H7','G7','F7','E7','D7','C7',
            'H8','G8','F8','E8',
            'G9'];

        var lettre = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

            for (var x = 0; x < lettre.length; x++) {
            for (var y = 0; y < 10; y++) {
                if (valide.indexOf(lettre[x] + y) !== -1) {
                    var inter = new Lyngk.Intersection(x, y);
                    inter.ajoutPiece(Lyngk.Color.GREEN);
                    plateau.push(inter);
                    }
                }
            }
    };

    this.Init_plateau43 = function(){

        var valide =['C1',
            'E2','D2','C2','B2',
            'G3','F3','E3','D3','C3','B3','A3',
            'G4','F4','E4','D4','C4','B4',
            'H5','G5','F5','E5','D5','C5','B5',
            'H6','G6','F6','E6','D6','C6',
            'I7','H7','G7','F7','E7','D7','C7',
            'H8','G8','F8','E8',
            'G9'];

        var lettre = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

        var cptColor = [0,0,0,0,0,0];

        for (var x = 0; x < lettre.length; x++) {
            for (var y = 0; y < 10; y++) {
                if (valide.indexOf(lettre[x] + y) !== -1) {
                    var inter = new Lyngk.Intersection(x, y);
                    var rng;
                    do{
                        rng = Math.floor(Math.random()*6);
                    }
                    while((cptColor[rng] === 8 && rng !== Lyngk.Color.WHITE) || (cptColor[rng] === 3 && rng === Lyngk.Color.WHITE));
                    inter.ajoutPiece(rng);
                    plateau.push(inter);
                    cptColor[rng]++;
                }
            }
        }

    };

    this.getTaillePlateau = function(){
        return plateau.length;
    };

    this.getEtat = function(i){
        return plateau[i].getState();
    };

    this.getCouleurPieceInter = function(i){
        return plateau[i].getColorInter();
    }

};
