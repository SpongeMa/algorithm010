/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (37.97%)
 * Likes:    811
 * Dislikes: 0
 * Total Accepted:    139.3K
 * Total Submissions: 364.7K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**@sponge
 * 解法一：二分查找
 * 根据nums[mid]与nums[l]的关系判断mid在左段还是右段
 * 再判断target是在mid的左边还是右边
 * time:O(logn)
 * space:O(1)
 */
var search = function(nums, target) {
  let l = 0;
  let r = nums.length-1;

  while (l<=r) {
    let mid = Math.floor((l+r)/2);
    if (target==nums[mid]) return mid;
    // 先根据 nums[mid] 与 nums[lo] 的关系判断 mid 是在左段还是右段 
    if (nums[mid] >= nums[l]) {
      // 再判断 target 是在 mid 的左边还是右边，从而调整左右边界 lo 和 hi
      if (target >= nums[l] && target < nums[mid]) {
          r = mid - 1;
      } else {
          l = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[r]) {
          l = mid + 1;
      } else {
          r = mid - 1;
      }
  }
    
  }
  return -1;
};
// @lc code=end

