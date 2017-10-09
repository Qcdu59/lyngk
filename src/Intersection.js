"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {
    var state = Lyngk.State.VACANT;
    var piece;
    var couleurInter;
    var pile = [];

    this.getState = function(){
        return state;
    }

    this.getPiece = function(){
        return piece;
    }

    this.getColorInter = function(){
        return couleurInter;
    }

    this.ajoutPiece = function(c){
        piece = new Lyngk.Piece(c);
        pile.push(c);
        if(c === Lyngk.Color.BLUE){
            couleurInter = c;
            state = Lyngk.State.ONE_PIECE;
        } else {
            if(c === Lyngk.Color.RED){
                couleurInter = c;
                state = Lyngk.State.STACK;
            }
        }
    }
};