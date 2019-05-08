class Box {
    private speedy : number;
    public state = 0;
    private movementStrategy : MovementStrategy;
    private entity : PhysicsEntity;
    constructor(private x : number, private y : number) {
        this.entity = new PhysicsEntity(x, y, 20, 20);
        this.movementStrategy = new PhysicsMovementStrategy();

    }

    move = () => {
        
        this.movementStrategy.move(this.entity);
    }

    setMovementStrategy = (strategy : MovementStrategy) => {
        
        this.movementStrategy = strategy;
    }
    render = (context) => {
        
        context.fillStyle = "#fff";
        context.fillRect(Math.round(Viewport.x+this.entity.x),Math.round(Viewport.y+ this.entity.y),this.entity.width,this.entity.height);
    }
}