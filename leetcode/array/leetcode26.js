var nums = [1,1,2]
// 输出 nums = [1,2]

// var removeDuplicates = function(nums){
//     var res = []
//     for(let i = 0; i < nums.length; i++){
//         if(!res.includes(nums[i])){
//             res.push(nums[i])
//         }
//     }
//     return res
// };

// console.log(removeDuplicates(nums))

var removeDuplicates = function(nums){
    var i=0;
    for(let j = 0; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return i+1
};