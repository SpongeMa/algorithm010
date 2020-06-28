/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (77.33%)
 * Likes:    619
 * Dislikes: 0
 * Total Accepted:    100.1K
 * Total Submissions: 129.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**@sponge 
 * 解法一：迭代
 * time:O(n*n^2)
 * space:O(n*n^2)
 * runtime:76ms 59.02%
 * memory usage:37.3MB 25%
 */
var subsets = function(nums) {
  let result = [[]];
  if(nums.length == 0) return result;
  
  for(num of nums){
    let subset = [];
    for(subresult of result){
      let tempresult = [...subresult,num]; //把结果数组中的每个子集都和nums数组的每个数组合
      subset.push(tempresult);
    }
    result = [...result,...subset]; //将子集加入到结果数组中
  }
  return result;
};
// @lc code=end

