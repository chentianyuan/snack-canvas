export default function isEat(foodX,foodY,arr){
    // 数组直接比较相等永远为false
    if(arr[arr.length-1].toString() == [foodX,foodY].toString()){
        return true
    }else{
        return false
    }
}