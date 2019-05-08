class CarryingMovementStrategy implements MovementStrategy {
    constructor(private carrier) {
    }

    move(entity: PhysicsEntity) {
        entity.speedx = this.carrier.speedx;
        entity.speedy = this.carrier.speedy;
        entity.y += entity.speedy;
        entity.x += entity.speedx;
    }
}