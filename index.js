// Add your functions here
// Gneralized mapToNegativize return nagative values of a given array
function map(arr,func){
    const newArr = []
    for (let i=0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}
