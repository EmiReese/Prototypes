
// Definition and Usage
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.




// The work commented out below is my original work recreating the "some" method logic.

// const arr = [2, 3, 6, 7, 8];
// let result = false;
// let num = 5;

// const MySome = (arr) => 
// {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < num) {
//             return result = true;
//         } else {
//             return result;
//         }
//     }
// }

// MySome();



Array.prototype.MySome = function(callbackFn) {
    let results = []
    for (let i = 0; i < this.length; i++){
        if (callbackFn(this[i])) results.push(this)
    }
    if (results.length > 0) {
        return true
    }
    return false
}

// test 
const array = [3,4,5,6,7];
let someResult = array.MySome(function(element) {
    return element % 2 === 0;
});
console.log("true")
console.log(someResult);


