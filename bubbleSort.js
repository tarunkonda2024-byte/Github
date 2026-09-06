const array = [5, 3, 8, 1]



function bubbleSort(arr){

    for(let i=0; i < arr.length; i++){
        
        for(let j=0; j< arr.length - 1; j++){
                if(arr[j] > arr[j + 1]){
                    const temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp
                }
        }

    }

    return arr

}

console.log(bubbleSort(array));
