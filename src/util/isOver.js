export default function isOver(arr){
    if(
        arr[arr.length-1][0] > 800 || 
        arr[arr.length-1][0] < 0 ||
        arr[arr.length-1][1] > 500 ||
        arr[arr.length-1][1] < 0 ||
        arr.map((val,index)=>{
            // console.log(val.toString(),arr[arr.length-1].toString())
            if(val.toString() == arr[arr.length-1].toString() && index != arr.length - 1){
                console.log('hello')
                return 'over'
            }else{
                return 'success'
            }
        }).toString().indexOf('over') != -1 
    ){
        alert('game over')
        return true
    }
}