/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (48.57%)
 * Likes:    8428
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.3M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* @sponge
  1.暴力求解,两次遍历 
  时间复杂度：O(n^2)
  空间复杂度：O(1)
*/
var twoSum = function(nums, target) {
    for(let i = 0 ;i< nums.length ;i++){
      for(let j = i+1 ;j< nums.length ;j++){
        if(nums[i]+nums[j]==target)
          return [i,j]
      }
    }
};

/*
  2.一遍哈希表
  时间复杂度：O(n)
  空间复杂度：O(n)
  runtime:64ms beats 94.44% 
  memory usage:34.1MB beats 97.46% 
*/
var twoSum = function(nums, target) {
  let hash = {};
  for(let i = 0;i<nums.length;i++){
    let dis = target - nums[i];
    if((typeof hash[dis])!=='undefined'){
      return [hash[dis],i]
    }
    hash[nums[i]]=i;
  }
};

/*
  3.两遍哈希表
  runtime:60ms beats 97.79% 
  memory usage:36.6MB beats 7.628% 
  时间复杂度：O(n)
  空间复杂度：O(n)
*/
var twoSum = function(nums, target) {
  if(nums.length === 2) return[0,1];
  const len = nums.length;
  let hash = {};
  //把数组的所有值和对应下标存到哈希表
  for(let i = 0;i<len;i++){
    hash[nums[i]]=i;
  }
  //直接找哈希表是否有dis这个值，有则返回对应下标和当前下标
  for(let i = 0;i<len;i++){
    let dis = target - nums[i];
    let found = hash[dis];
    if(hash[dis]!==undefined && i!=found){
      return [i,found]
    }
  }
};
// @lc code=end

