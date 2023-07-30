/*
array---it is special variable that can hold 
        more than one variable
    each "space" is known as element
    you can accessing any element in an array by refering the index number
    eg..arr[3]
*/

var nums=["one","two","three","four","five","six"];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);

nums.push("four");
//push(ele) method to add an element
console.log(nums);

nums.pop();
//pop() to remove the last element
console.log(nums);

//arr.length to fetch the length of array
console.log(nums.length);

//arr.sort() to sorting the array...
console.log(nums.sort());

//arr.reverse to reverse the array..
console.log(nums.reverse());

var len = nums.length;

console.log("the last thing", nums[len-1]);


