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
var TimedParticle = (function (_super) {
    __extends(TimedParticle, _super);
    function TimedParticle(x, y, xSpeed, ySpeed, image, lifetime) {
        var _this = _super.call(this, x, y, xSpeed, ySpeed, image) || this;
        _this.lifetime = lifetime;
        return _this;
    }
    TimedParticle.prototype.move = function () {
        _super.prototype.move.call(this);
        this.lifetime--;
        if (this.lifetime <= 0) {
            this.shouldBeDeleted = true;
            return;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.xSpeed /= this.xFriction;
        this.ySpeed += 0.8;
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    };
    return TimedParticle;
}(Particle));
