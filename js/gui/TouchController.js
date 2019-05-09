var TouchController = (function () {
    function TouchController(x, y, width, height, keyCode) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.keyCode = keyCode;
        this.activate = function () {
            _this.active = true;
        };
        this.deactivate = function () {
            _this.active = false;
        };
        this.active = false;
    }
    TouchController.prototype.render = function (context) {
        var alpha = this.active ? 0.8 : 0.4;
        context.fillStyle = "rgba(255,255,255," + alpha + ")";
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    return TouchController;
}());
