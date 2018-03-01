export default class Snack{
    constructor(ctx,bodycolor,headcolor){
        this.ctx = ctx
        this.bodycolor = bodycolor
        this.headcolor = headcolor
    }
    draw(snackArr,dir){
        // console.log(dir)
        let ctx = this.ctx
        ctx.clearRect(0,0,800,500)
        snackArr.forEach((arr,index) => {
            if(index !== snackArr.length-1){
                ctx.beginPath()
                ctx.fillStyle = this.bodycolor
            }else{
                ctx.beginPath()
                ctx.fillStyle = this.headcolor                
            }
            ctx.fillRect(arr[0],arr[1],10,10)
            ctx.closePath()
        })
    }
}