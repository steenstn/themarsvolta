var TouchController = (function () {
    function TouchController(x, y, width, height, keyCode) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.keyCode = keyCode;
    }
    TouchController.prototype.render = function (context) {
        context.fillStyle = "rgba(255,255,255,0.4)";
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    return TouchController;
}());
