/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (num in nums){
        for(i=0;i<nums.length;i++){
            if(nums[num]+nums[i] == target){
                if(num != i){
                return [num,i];
                }
            }
        }
    }
};