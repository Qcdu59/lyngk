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

    this.getTaillePile = function(){
        return pile.length;
    }

    this.ajoutPiece = function(c){
        piece = new Lyngk.Piece(c);
        pile.push(c);
        couleurInter = c;
        if(pile.length === 1){
            state = Lyngk.State.ONE_PIECE;
        } else {
            if(pile.length>1 && pile.length<5){
                state = Lyngk.State.STACK;
            } else {
                if(pile.length >= 5){
                    state = Lyngk.State.FULL_STACK;
                }
            }
        }
    }
};