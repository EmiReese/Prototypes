
// Definition and Usage
// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

Array.prototype.myReduce = 
function (callbackFn) {
    if (this.length < 1) {
        return null
    }
     let result = this[0]
     for (let i=0; i < this.length; i++){
         result = callbackFn(result, this[i]);
     }
     return result;
}

// test 
let array = [5, 10, 29, 49];
reduceResult = array.myReduce( (accumulator, item) => {
    return accumulator * item
})

console.log("Reduced Number: ", reduceResult);


