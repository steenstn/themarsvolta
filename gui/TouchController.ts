class TouchController implements GUIRenderable {
    
    constructor(public readonly x: number, public readonly y: number, public readonly width : number, public readonly height : number, public readonly keyCode : KeyCode) {}

    render(context: any): void {
        context.fillStyle= "rgba(255,255,255,0.4)";
        context.fillRect(this.x,this.y,this.width,this.height);
    }

}