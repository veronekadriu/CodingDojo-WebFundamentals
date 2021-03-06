// Given an array, write a function that changes all positive numbers in the array to "big".

function biggieSize(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr
}

var result = biggieSize([-1,3,5,-5]);
console.log(result);

//Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]<low){
            low= arr[i];
        }
        else if(arr[i]>high){
            high= arr[i];   
        }
    }
    console.log(low);
    return high;
}

var result= printLowReturnHigh([-1,2,5,6,8]);
console.log(result);

//Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr){
    var first_odd = arr[0];
    for(var i=0; i<arr.length; i++){  
      if(arr[i]%2===1){
            first_odd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length-2]);
    return first_odd;
}
var result = printOneReturnAnother([2,3,4,1,6]);
console.log(result);

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
      newArr.push(arr[i]*2);
    }
  return newArr;
  }
var result = doubleVision([2,4,6]);
console.log(result);

// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            count ++;
        }
      
    }
    arr[arr.length-1] =count;
    return arr;
}

var result = countPositives([-1,-2,4,6]);
console.log(result);

//// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function evenAndOdds(arr){
    var even=0;
    var odd=0;
    for(var i=0; i<arr.length;i++){
       console.log(arr[i]);
        if(arr[i]%2===1){
            odd++;
        }
        if(arr[i]%2===0){
            even++;
        }
        if(odd>=3){
            console.log("That's odd!");
            odd=0;
        }
        else if(even>=3){
            console.log("Even more so!");
            even=0;
        }
    }
}
evenAndOdds([1,1,1,4,2,5]);

// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function incrementTheSeconds(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2===1){
            arr[i] += 1;
        }
    }
    console.log(arr);
    return arr;
}
incrementTheSeconds([1,4,1,2]);

// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function previousLengths(arr){
    for(var i=arr.length-1; i>0; i--){
        arr[i]= arr[i-1].length;
    }
    return arr;
}
var result = previousLengths(["hello", "coding", "dojo"]);
console.log(result);

// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSevenToMost(arr){
    var newArr=[];
    for(var i=1; i<arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}
var result =addSevenToMost([1,4,1,2]);
console.log(result);

// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function returnReversed(arr){
    for(var i = 0; i<(arr.length/2); i++){
      var y = arr[i];
      arr[i] = arr[arr.length-(1+i)];
      arr[arr.length-(1+i)] = y;
    }
    return arr;
}
var result = returnReversed([1,5,10,-2]);
console.log(result);


// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative(arr){
    var newArr= [];
    for(var i=0; i<arr.length;i++){
        if(arr[i]>0){
            arr[i]=arr[i]-(arr[i]*2);
            newArr.push(arr[i]);            
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var result = negative ([1,-3,5]);
console.log(result);

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr){
    var count=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]=== "food"){
            count++;
            console.log("yummy");
        }
        if(arr[i]=== arr[arr.length-1]&& count===0){
            console.log("I'm hungry");
        }        
    }
}
 alwaysHungry ([ "food","yes","no"]);

 // Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
 
 function swapTowardTheCenter(arr){
    for(var i=0; i<arr.length; i= i+2){
        var temp=arr[(arr.length-1)-i];
        arr[(arr.length-1)-i]= arr[i];
        arr[i]= temp;
    }
    return arr;
}
var result = swapTowardTheCenter([1,2,3,4,5,6]);
console.log(result);

// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleTheArray(arr,num){
    for(var i=0; i<arr.length;i++){
       arr[i]= arr[i]*num;

    }
    return arr;
}
scaleTheArray([1,2,3],3);

