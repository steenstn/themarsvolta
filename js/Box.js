var Box = (function () {
    function Box(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.state = 0;
        this.move = function () {
            _this.movementStrategy.move(_this.entity);
        };
        this.setMovementStrategy = function (strategy) {
            _this.movementStrategy = strategy;
        };
        this.render = function (context) {
            context.fillStyle = "#fff";
            context.fillRect(Math.round(Viewport.x + _this.entity.x), Math.round(Viewport.y + _this.entity.y), _this.entity.width, _this.entity.height);
        };
        this.entity = new PhysicsEntity(x, y, 20, 20);
        this.movementStrategy = new PhysicsMovementStrategy();
    }
    return Box;
}());
