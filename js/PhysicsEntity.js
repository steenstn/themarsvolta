var PhysicsEntity = (function () {
    function PhysicsEntity(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.oldx = this.oldy = 0;
        this.speedx = this.speedy = 0;
    }
    return PhysicsEntity;
}());
