//Apple UI Engineer - https://jobs.apple.com/en-in/details/200206990/ui-frontend-engineer

//Apple Interview Quesions

//1.Composting Layer CSS3

//2.Past experiences in future role

//3.Array flatten

//4.Array map

//5.Concatenate
var arr = [1,2,3]
var arr1 = [5,6,7]

console.log([...arr, ...arr1])

//6. Find the position of first duplicate element in a string.

//7. Concatenate two array and find the unique element from it.

//8. Input array [3,4,5] output array [20, 15,12]

//9. What is promise, how can you execute array of promise sequence by sequence- use generator concept


//10. How to build a npm package

//11.serialize deserializer

//12. photo ordering tool with vanilla JS 

//13.find median of array
/*var a = [1,2,4,9,0,3,5]//0,1,2,3,4,5,9

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

console.log(median(a))*/

//14.HTTP Status codes you know. Diff between 401, 400, 402.

//15. Have you ever used 429 status code?

//16. What is diff between reflow, repaint.

//17. Implement Max & Min on an Array

//18. Explain some of the Cache Control Header Tags

//19. Explain Box Modal

//20. Difference between a + b, a ~ b, a > b in CSS
/*descendant selector (space)
child selector (>)
adjacent sibling selector (+)
general sibling selector (~)*/

//21. Writing API layer for apps


//22. Promise polyfills - all, any, then etc

//23, DSA q - time tuples 

//24. Virtualized list 

//25. lazy loading

//26. prefetch, reload

//27. CORS

//28. Interjection observer

//29. Implement bind on your own

  let obj = {
    name: 'Jack',
  };
  
  let myFunc = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
  };
  
  // Accepting any number of arguments passed to myBind
  Function.prototype.myBind = function (obj, ...args) {
    let func = this;
    // Accepting arguments passed to newFunc
    return function (...newArgs) {
      func.apply(obj, [...args, ...newArgs]);
    };
  };
  
  let newFunc = myFunc.myBind(obj, 'a_random_id')
  newFunc('New York') // Jack, a_random_id, New York

//30. URL array, Promise.all -> async await instead of promises

//31. rem, vw, em 