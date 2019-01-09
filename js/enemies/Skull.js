var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Skull = (function (_super) {
    __extends(Skull, _super);
    function Skull(enemy) {
        var _this = _super.call(this, new GlidingStrategy(enemy)) || this;
        _this.speedx = 0;
        _this.width = 28;
        _this.height = 35;
        _this.offsetx = 3;
        _this.x = enemy.x;
        _this.y = enemy.y;
        _this.oldx = enemy.oldx;
        _this.oldy = enemy.oldy;
        _this.direction = enemy.direction;
        _this.acceleration = _this.direction > 0 ? 0.5 : -0.5;
        Skull.image.src = GameState.christmasMode ? "images/skullxmas.png" : "images/skull.png";
        Skull.image.width = 40;
        Skull.image.height = 50;
        return _this;
    }
    Skull.prototype.draw = function (context) {
        var drawingOffsetx;
        var drawingWidth;
        if (this.speedx > 0.5) {
            drawingOffsetx = 75;
            drawingWidth = 36;
        }
        else if (this.speedx < -0.5) {
            drawingOffsetx = 0;
            drawingWidth = 36;
        }
        else {
            drawingOffsetx = 39;
            drawingWidth = 32;
        }
        context.drawImage(Skull.image, drawingOffsetx, 0, drawingWidth, 50, Math.round(Viewport.x + this.x), Math.round(Viewport.y + this.y), 36, 50);
    };
    Skull.image = new Image();
    return Skull;
}(Enemy));
