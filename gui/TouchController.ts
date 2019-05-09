class TouchController implements GUIRenderable {
    
    private active : boolean;
    constructor(public readonly x: number, public readonly y: number, public readonly width : number, public readonly height : number, public readonly keyCode : KeyCode) {
        this.active = false;
    }

    activate = () => {
        this.active = true;
    }

    deactivate = () => {
        this.active = false;
    }

    render(context: any): void {
        let alpha = this.active ? 0.8 : 0.4;
        context.fillStyle= "rgba(255,255,255,"+alpha+")";
        context.fillRect(this.x,this.y,this.width,this.height);
    }

}