// Add your functions here
// Gneralized mapToNegativize return nagative values of a given array
function mapToNegativize(numbers,func){
  return numbers.map(func);
}

//mapToNoChange  returnsame values of a given array
function mapToNoChange(array,func){
  const newArray=[];
   array.forEach(element =>newArray.push(func(element)));
   return newArray;
}
