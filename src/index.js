import Snack from './components/snack.js'
import Food from './components/food.js'
import move from './util/move.js'
import isEat from './util/isEat.js'
import isOver from './util/isOver.js'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let direction = 'right' // 移动方向
let foods = [],foodX,foodY // 食物位置
let arr = [] // 存储蛇的位置
let drawState = true // 存储画蛇状态

window.onload = function(){
    document.onkeydown = function(){
            switch(event.keyCode){
            case 37:
                if(direction !== 'right' && drawState){
                    direction = 'left'
                    drawState = false
                }
                break
            case 38:
                if(direction !== 'down' && drawState){
                    direction = 'up'
                    drawState = false
                }
                break
            case 39:
                if(direction !== 'left' && drawState){
                    direction = 'right'
                    drawState = false
                }
                break
            case 40:
                if(direction !== 'up' && drawState){
                    direction = 'down'
                    drawState = false
                }
                break
            default:
                return
        }
    }
    init()
}   
function init(){
    gameInit()    
}
function gameInit(){
    // 移除重启事件
    canvas.removeEventListener('click',init)
    // 新蛇
    let snack = new Snack(context,"#000","red")
    direction = 'right' // 重置移动方向
    arr = [] // 重置蛇的位置
    for(let i = 0 ; i < 5 ; i++){
        arr[i] = [i*10,100]
    }
    var timer = setInterval(()=>{      
        
        // 初始化
        snack.draw(arr,direction) 
        foods.length == 0 ? generateFood() : foods[0].drawfood()
        
        
        // 判断游戏是否结束
        if(isOver(arr)){
            // 单机重新开始
            canvas.addEventListener('click',init)
            clearInterval(timer)
            return
        }

        // 判断是否吃食
        if(isEat(foodX,foodY,arr)){
            if(direction == 'left' || direction == 'right'){
                arr.unshift([arr[0][0]-10,arr[0][1]])
            }else{
                arr.unshift([arr[0][0],arr[0][1]]-10)                
            }
            foods.splice(0,1)
        }

        // 开始移动
        move(direction,arr)
        
        // 每次画完蛇，把状态切换为true，此时才又可以重新控制蛇的方向，以免在画蛇期间多次改变蛇的方向至蛇死亡
        drawState = true
    },50)
}

// 生成食物
function generateFood(){
    // 食物生成坐标必须是十的倍数
    foodX = Math.floor(Math.random()*79)*10
    foodY = Math.floor(Math.random()*49)*10
    Promise.resolve().then(()=>{
        return new Promise((resolve,reject)=>{
            arr.forEach(val=>{
                if(val.toString() === [foodX,foodY].toString()){
                    reject()
                }
            })
            resolve()
        })
    }).then(()=>{
        foods.push(new Food(context,foodX,foodY))
    }).catch(()=>{
        generateFood()        
    })
}