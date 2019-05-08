var PhysicsMovementStrategy = (function () {
    function PhysicsMovementStrategy() {
    }
    PhysicsMovementStrategy.prototype.move = function (entity) {
        entity.oldx = entity.x;
        entity.oldy = entity.y;
        if (entity.speedy < WorldConstants.maxSpeedy) {
            entity.speedy += WorldConstants.gravity;
        }
        if (entity.speedx < 0) {
            var arrayPos = Level.getBlockAt(entity.x, entity.y + 10);
            if (arrayPos.blocking) {
                entity.x = entity.oldx;
                entity.speedx *= -0.5;
            }
        }
        else {
            var arrayPos = Level.getBlockAt(entity.x + 20, entity.y + 10);
            if (arrayPos && arrayPos.blocking) {
                entity.x = entity.oldx;
                entity.speedx *= -0.5;
            }
        }
        if (Level.getBlockAt(entity.x, entity.y + 20).blocking) {
            entity.y = entity.oldy;
            entity.speedy = 0;
            entity.speedx /= WorldConstants.normalFriction;
        }
        entity.y += entity.speedy;
        entity.x += entity.speedx;
    };
    return PhysicsMovementStrategy;
}());
