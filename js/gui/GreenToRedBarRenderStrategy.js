var GreenToRedBarRenderStrategy = (function () {
    function GreenToRedBarRenderStrategy(getValueMethod, x, y) {
        var _this = this;
        this.render = function (context) {
            var value = _this.getValueMethod();
            _this.counter++;
            var g = value * 2 + 29;
            var r = 250 - value * 2;
            var b = 28;
            context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            if (value > 20) {
                context.fillRect(_this.x, _this.y, Math.round(value), 8);
            }
            else {
                if (_this.counter % 40 > 20) {
                    context.fillRect(_this.x, _this.y, Math.round(value), 8);
                }
            }
            context.strokeStyle = "black";
            context.strokeRect(_this.x - 1, _this.y - 1, 102, 10);
        };
        this.counter = 0;
        this.getValueMethod = getValueMethod;
        this.x = x;
        this.y = y;
    }
    return GreenToRedBarRenderStrategy;
}());
