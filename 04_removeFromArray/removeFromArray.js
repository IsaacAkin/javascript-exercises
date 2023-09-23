const removeFromArray = function(array, ...removedElements) {
    // create a new array
    const newArray = [];

    // adds each item into the new array that isn't included in the functions arguments
    array.forEach((item) => {
        // if the items in the array are not included in the array of 
        // removed elements then it pushes it into the new array
        if (!removedElements.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
