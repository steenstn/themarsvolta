var HealthBar = (function () {
    function HealthBar(renderStrategy) {
        var _this = this;
        this.render = function (context) {
            _this.renderStrategy.render(context);
        };
        this.renderStrategy = renderStrategy;
    }
    return HealthBar;
}());
