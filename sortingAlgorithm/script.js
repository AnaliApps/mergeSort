function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }else{
        let mid = Math.floor(arr.length-1/2)
        let leftHalf = arr.slice(0,mid)
        let rightHalf = arr.slice(mid)
        let sortedLeftHalf = mergeSort(leftHalf)
        let sortedRightHalf = mergeSort(rightHalf)
        console.log(sortedLeftHalf)
        console.log(sortedRightHalf)
        return merge(sortedLeftHalf,sortedRightHalf)
    }
}

function merge(arr1,arr2){
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++;
        }else{
            results.push(arr2[j])
            j++;
        }
    }

    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    return results;
}

console.log(mergeSort([2,9,1,10,4,3]))