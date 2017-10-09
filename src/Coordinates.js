"use strict";

Lyngk.Coordinates = function (co, li) {
    var c = co;
    var l = li;

    this.check = function () {

        var coordonne = co + li;
        var valide = ['C1',
            'B2', 'C2', 'D2', 'E2',
            'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3',
            'B4', 'C4', 'D4', 'E4', 'F4', 'G4',
            'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5',
            'C6', 'D6', 'E6', 'F6', 'G6', 'H6',
            'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7',
            'E8', 'F8', 'G8', 'H8',
            'G9'];
        if (valide.indexOf(coordonne) === -1) {
            return false;
        } else {
            return true;
        }
    }

    this.toString = function () {
        if(!this.check())
            return 'invalid'
        return c+l;
    }

    this.clone = function () {
        return new Lyngk.Coordinates(co,li);
    }

    this.hash = function () {
        var hashC = ((co.charCodeAt()-64)*10)+li;
        return hashC;
    }
};