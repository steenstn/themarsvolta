class PhysicsEntity {
    public oldx : number;
    public oldy : number;
    public speedx : number;
    public speedy : number;
    constructor(public x : number, public y : number, public width: number, public height : number) {
        this.oldx = this.oldy = 0;
        this.speedx = this.speedy = 0;
    }
}