const arr = [1, 40, -5, 10, 0];

function bubleSort(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubleSort(arr));