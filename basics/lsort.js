//numbers.sort() for ASCII sorting...

let nums = [40,6,2,1,43,23,0,15,7,22];

console.log(nums.sort());

//sorting function..
let nums1 = nums.sort(function(x,y){
    return x-y;
})
console.log(nums1);

//reverse sort..
let nums2 = nums.sort(function(x,y){
    return y-x;
})
console.log(nums2);

//sorting by arrow function..
let nums3= nums.sort((x,y) => x-y);
console.log(nums3);


//reverse sorting by arrow function..
let nums4= nums.sort((x,y) => y-x);
console.log(nums4);