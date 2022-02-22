//Apple UI Engineer - https://jobs.apple.com/en-in/details/200206990/ui-frontend-engineer

//Apple Interview Quesions

//1.Composting Layer CSS3

//2.Past experiences in future role

//3.Array flatten

//4.Array map

//5.Concatenate

//6. Find the position of first duplicate element in a string.

//7. Concatenate two array and find the unique element from it.

//8. Input array [3,4,5] output array [20, 15,12]

//9. What is promise, how can you execute array of promise sequence by sequence- use generator concept


//10. How to build a npm package

//11.serialize deserializer

//12. photo ordering tool with vanilla JS 

//13.find median of array
var a = [1,2,4,9,0,3,5]//0,1,2,3,4,5,9

function median(arr) {
    var len = Math.floor(arr.length)
    arr = arr.sort((a,b)  => b-a)
    if(len%2!==0){
        return arr[(len/2)]
    }    
    //return Math.median(arr)
    return (arr[(len/2)-1]+arr[len/2+1])/2
}

function median_2(numbers) {
    //const sorted = numbers.slice().sort((a, b) => a - b);
    numbers.sort((a,b) => a-b)
    const middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return (numbers[middle - 1] + numbers[middle]) / 2;
    }

    return numbers[middle];
}

console.log(median(a))