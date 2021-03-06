class Background {
  private context;
  private backgroundGradient;

  constructor(context : any) {
      this.context = context;
      this.backgroundGradient=this.context.createLinearGradient(0,Viewport.height,0,0);
      this.backgroundGradient.addColorStop(0,"black");
      this.backgroundGradient.addColorStop(0.23,"#1b2d3b");
      this.backgroundGradient.addColorStop(0.235,"#df2121");
      this.backgroundGradient.addColorStop(0.45,"#da732e");
      this.backgroundGradient.addColorStop(0.60,"#3b8996");
      this.backgroundGradient.addColorStop(0.9,"#1b2d3b");
  }

  drawBackground() {
    this.context.fillStyle=this.backgroundGradient;
    this.context.fillRect(0,0,Viewport.width,Viewport.height);

    this.context.strokeStyle='rgba(255, 255, 255, 0.3)';

    // Left
    this.context.beginPath();
    this.context.arc(Viewport.width/8+Viewport.x/8,110,120,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width/8+Viewport.x/8,110,90,0,2*Math.PI);
    this.context.stroke();
    // Middle
    this.context.beginPath();
    this.context.arc(Viewport.width/2+Viewport.x/10,90,100,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width/2+Viewport.x/10,90,70,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width/2+Viewport.x/10,90,50,0,2*Math.PI);
    this.context.stroke();
    // Right
    this.context.beginPath();
    this.context.arc(Viewport.width-Viewport.width/8+Viewport.x/8,110,120,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width-Viewport.width/8+Viewport.x/8,110,90,0,2*Math.PI);
    this.context.stroke();
    // Second right
    this.context.beginPath();
    this.context.arc(Viewport.width+Viewport.width/8+Viewport.x/8,180,50,0,2*Math.PI);
    this.context.stroke();
    // Third right
    this.context.beginPath();
    this.context.arc(Viewport.width+Viewport.width/3.5+Viewport.x/8,160,40,0,2*Math.PI);
    this.context.stroke();
    // Big right
    this.context.beginPath();
    this.context.arc(Viewport.width+Viewport.width/4+Viewport.x/8.5,0,120,0,2*Math.PI);
    this.context.stroke();


    // Bottom
    this.context.beginPath();
    this.context.arc(Viewport.width/2+Viewport.x/12,Viewport.height,80,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width/2+Viewport.x/12,Viewport.height,60,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width/2+Viewport.x/12,Viewport.height,40,0,2*Math.PI);
    this.context.stroke();

    // Four bottom
    this.context.beginPath();
    this.context.arc(Viewport.width*0.42+Viewport.x/12,Viewport.height*0.67,30,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width*0.35+Viewport.x/12,Viewport.height*0.82,30,0,2*Math.PI);
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(Viewport.width*0.58+Viewport.x/12,Viewport.height*0.67,30,0,2*Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(Viewport.width*0.65+Viewport.x/12,Viewport.height*0.82,30,0,2*Math.PI);
    this.context.stroke();
  }
}
