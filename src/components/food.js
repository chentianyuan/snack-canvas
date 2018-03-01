export default class Food{
    constructor(ctx,x,y){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.size = 10
    }
    drawfood(){
        let ctx = this.ctx
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.fillRect(this.x,this.y,this.size,this.size)
        ctx.closePath()
    }
}