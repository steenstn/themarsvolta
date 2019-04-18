class GreenToRedBarRenderStrategy implements BarRenderStrategy {
    private counter : number;
    private getValueMethod : () => number;
    private x : number;
    private y : number;

    constructor(getValueMethod : () => number, x : number, y : number) {
        this.counter = 0;
        this.getValueMethod = getValueMethod;
        this.x = x;
        this.y = y;
    }

    render = (context : any) => {
        let value = this.getValueMethod();
        this.counter++
        var g = value*2 + 29;
        var r = 250 - value*2;
        var b = 28;
        context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        if(value>20) {
            context.fillRect (this.x,this.y,Math.round(value),8);
        } else {
            if(this.counter%40>20) {
                context.fillRect (this.x,this.y,Math.round(value),8);
            }
        }

        context.strokeStyle = "black";
        context.strokeRect(this.x-1,this.y-1,102,10);
    }

}