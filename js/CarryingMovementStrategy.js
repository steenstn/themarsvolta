var CarryingMovementStrategy = (function () {
    function CarryingMovementStrategy(carrier) {
        this.carrier = carrier;
    }
    CarryingMovementStrategy.prototype.move = function (entity) {
        entity.speedx = this.carrier.speedx;
        entity.speedy = this.carrier.speedy;
        entity.y += entity.speedy;
        entity.x += entity.speedx;
    };
    return CarryingMovementStrategy;
}());
