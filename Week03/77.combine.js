/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (73.67%)
 * Likes:    293
 * Dislikes: 0
 * Total Accepted:    57.4K
 * Total Submissions: 77.6K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/**@other
 * 解法一：回溯法
 * 
 * runtime:144ms 45.56%
 * memory usage:40.8MB 100%
 */
var combine = function(n, k) {
  var result = [];
  (function combineSub(start=1,subresult=[]){
      //terminator
      if(subresult.length == k){
          result.push([...subresult]);
          return;
      }
      for(var i= start;i<=n;i++){
          subresult.push(i);
          combineSub(i+1,subresult); //drill down
          subresult.pop();            
      }   
  })();
  return result;
};

/**@other
 * 解法二：递归合并
 * 
 * runtime:132ms 58.82%
 * memory usage:42.6MB 50%
 */
var combine = function(n, k) {
  var result = [];
  var subresult = [];
  // n==k/k==0 对于两种情况边界
  if( n==k || k == 0){
    var tmp = [];
    for(var i = 1;i<=k;i++){
      subresult.push(i);
    }
    tmp.push(subresult); // 构造如[[x]]的返回形式
    return tmp;
  }
  // n-1 里选 k-1 个
  var result = combine(n-1,k-1);
  // 组合[[x,y]]：第n个数被选择=>[[x,y,n]]
  result.map((arr) => arr.push(n));
  // n-1 里选 k 个
  var tmp = combine(n-1,k);
  // 第二种情况的结果打散装入返回数组里去
  // result:[[x,y]]、tmp[[x1,y1]]
  // ==> result:[[x,y],[x1,y1]]
  tmp.map((arr) => result.push(arr));
  // 返回每次成功组装的结果集，最后递归终点则返回所以可能组合
  return result;
};
// @lc code=end

