"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    /* private x:number;                           // we need to give access modifier so that no can use this
     private y:number;
     private z:number;
     constructor(x?:number,y?:number,z?:number){  //if we give this ( ? ) symbol we can neither give nor leave this number parameter
         this.x=x;
         this.y=y;
         this.z=z;
     }*/
    function Point(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log('X = ' + _this.x + ',Y = ' + _this.y + ',Z = ' + _this.z);
        };
        this.drawTriangle = function () {
            _this.draw();
        };
    }
    return Point;
}());
exports.Point = Point;
