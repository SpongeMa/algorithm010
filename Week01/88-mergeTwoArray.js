/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


 /**@sponge
  * 解法一：双指针
  * runtime:76ms,beats 34.25%
  * memory usage:32.9MB,beats 100%
  */
var merge = function(nums1, m, nums2, n) {
  let len = nums1.length;
  nums1.splice(m,len-m);
  console.log(nums1)
  let j=0;
  let lastIndex=0;
  while(j<n){
    let cur =nums2[j];
    for(let i =lastIndex;i<nums1.length;i++ ){
      console.log('j:',j,'cur:',cur,'i:',i,'nums1[i]:',nums1[i])
      if(cur<nums1[i]){
        nums1.splice(i,0,cur);
        lastIndex = i+1;
        break;
      }else if( cur==nums1[i]){
        nums1.splice(i+1,0,cur);
        lastIndex = i+2;
        break;
      }
      if(cur>nums1[i]&&i==nums1.length-1){
        nums1.push(cur);
        lastIndex = nums1.length-1;
        break;
      }
        
    }
    j++;
  }

};

/**@sponge
 * 解法二：先concat->sort
 * 注意：需要考虑如果sort参数缺省的话，排序会按照数据的第一位的unicode码来排序
 * runtime:72ms,beats 54.29%
 * memory usage:33.2MB,beats 100%
 */
var merge = function(nums1, m, nums2, n) {
  let len = nums1.length;
  nums1.splice(m,len-m,...nums2);
  nums1.sort((a,b)=>a-b);
};

// @lc code=end

