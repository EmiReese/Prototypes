// Definition and Usage
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


const data = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (callbackFn) {
    const filteredArr = [];
    for (let i=0; i < this.length; i++){
        if (callbackFn(this[i])) {
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
}

const filteredData = data.myFilter (function(el) {
    if (el > 5 ) return el; 
});

console.log(filteredData);

// test 
const states = ["Texas", "Georgia", "California", "Arizona"]
let filterResult = states.myFilter((element) => {
    return element.length > 5;
});

console.log("Got: ", filterResult);