/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (75.46%)
 * Likes:    1114
 * Dislikes: 0
 * Total Accepted:    139.7K
 * Total Submissions: 184.9K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

 /**@other 解法一：递归、深度优先遍历
  * @param left 表示左括号还有多少个没用掉
  * @param right 表示右括号还有多少个没用掉
  * @param result 返回的结果数组
  * @param str 当前递归得到的字符串n
  * @param n 需要用到多少个左括号、右括号
  * 
  * time:O(2^n)
  * space:O(n)
  * runtime:68ms 74.28%
  * memory usage:36.1MB 12.5%
  */
var generateParenthesis = function(n) {
  let result = [];
  if(n==0) return result;
  //teminator
  var generate = (left, right, n, str)=>{
    if( left==n && right==n ){
      result.push(str);
      return ;
    }

    //process logic in current level
    if(left<n)
      generate(left+1,right,n,str+'(');  //drill down,如果还有左括号没用完
    if( left>right )  //因为left<n，所以right一定小于n，
      generate(left,right+1,n,str+')');  //drill down,如果还有右括号没用完
  }
  generate(0,0,n,'');
  return result;
};

/**@other 解法二：广度优先遍历
 * 
 * 
 */
function Node(str,left,right){
  this.str = str;
  this.left = left;
  this.right = right;
}
function ListNode(str,left,right){
  this.str = str;
  this.left = left;
  this.right = right;
}
var generateParenthesis = function(n) {
  let result = [];
  let str = '';
  var generate = (left, right, n, str)=>{
    
  }
  generate(0,0,n,str);
  return result;
};


/**@other 解法三：动态规划
 * 
 * 
 */
function Node(str,left,right){
  this.str = str;
  this.left = left;
  this.right = right;
}
function ListNode(str,left,right){
  this.str = str;
  this.left = left;
  this.right = right;
}
var generateParenthesis = function(n) {
  let result = [];
  let str = '';
  var generate = (left, right, n, str)=>{
    
  }
  generate(0,0,n,str);
  return result;
};
// @lc code=end

