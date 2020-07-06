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
 * 解法一：暴力
 * 思路：将给定的数组还原成排序数组，再进行二分查找。
 * 但如果单纯用暴力解法还原数组需要从头到尾遍历所以需要O(n)的时间复杂度，可用下面方法简化成O(logn)
 * 1.找到第一个无序的位置还原成排序数组，用O(logn)实现，
 * 2.再用二分查找O(logn)
 * time:O(logn)
 * space:O(1)
 * runtime:72ms 56%
 * memory usage:33.3MB 100%
 */
var search = function (nums, target) {
  if (!nums.length) return -1;

  let l = 0;
  let r = nums.length - 1;
  let mid = 0;
  //暴力还原排序数组,找到第一个无序的位置(用二分查找实现)
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  //找到第一个无序的位置，即最小的值
  let min = l;
  l = 0;
  r = nums.length - 1;
  //判断target是否在min~r之间
  if (target <= nums[r]) l = min;
  else r = min - 1;
  //按二分查找模板搜索target
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
};

/**@sponge
 * 解法二：二分查找
 * 根据nums[mid]与nums[r]的关系判断mid在左段还是右段,
 * 或者nums[mid]与nums[l]的关系判断mid在左段还是右段
 * 再判断target是在mid的左边还是右边
 * time:O(logn)
 * space:O(1)
 * runtime:72ms 
 * memory usage:33.1MB
 */
var search = function (nums, target) {
  if (!nums.length) return -1;

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target == nums[mid]) return mid;
    // 先根据 nums[mid] 与 nums[r] 的关系判断 mid 是在左段还是右段 
    if (nums[mid] < nums[r]) {
      // 再判断 target 是在 mid 的左边还是右边，从而调整左右边界 l 和 r
      // mid ~ r 之间有序
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target < nums[mid] && target >= nums[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

  }
  return -1;
};
// @lc code=end