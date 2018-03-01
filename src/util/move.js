export default function move(direction,arr){
    switch(direction){
        case 'left':
            arr.forEach((val,index)=>{
                if(index == arr.length-1){
                    arr[index][0] -= 10
                }else{
                    arr[index] = arr[index+1].slice(0,2)
                }
            })
            break
        case 'up':
            arr.forEach((val,index)=>{
                if(index == arr.length-1){
                    arr[index][1] -= 10
                }else{
                    arr[index] = arr[index+1].slice(0,2)
                }
            })
            break
        case 'right':
            arr.forEach((val,index)=>{
                if(index == arr.length-1){
                    arr[index][0] += 10
                }else{
                    arr[index] = arr[index+1].slice(0,2)
                }
            })
            break
        case 'down':
            arr.forEach((val,index)=>{            
                if(index == arr.length-1){
                    arr[index][1] += 10
                }else{
                    arr[index] = arr[index+1].slice(0,2)
                }
            })
            break
        default:
            break
    }   
}