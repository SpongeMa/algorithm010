/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (48.72%)
 * Likes:    1081
 * Dislikes: 0
 * Total Accepted:    224.3K
 * Total Submissions: 450.8K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
  除了以下三种解法外，还有通项公式(Binets Formula)和矩阵快速幂的方法，这两个方法是最优解。
  time:O(log n)
  space:O(1)
*/

/**@other
 * 解法一：递归+记忆
 * 递归方法当n的数很大的时候，会造成超出时间限制的问题，所以要缓存冗余的数据，故用记忆化递归的方法
 * time:O(n)
 * space:O(n)
 * runtime:68ms 57.71%
 * memory usage:32.2MB 100%
 */
var climbStairs = function (n) {
  let memo = {
    1: 1,
    2: 2
  }

  function climbStairsMemo(n) {
    if (memo[n] === undefined)
      memo[n] = climbStairsMemo(n - 1) + climbStairsMemo(n - 2);
    return memo[n];
  }
  return climbStairsMemo(n);
};



/**@other
 * 解法二：滚动数组（目前最优解）
 * time:O(n)
 * space:O(1)
 * runtime:72ms 33.8%
 * memory usage:32.3MB 100%
 */
var climbStairs = function (n) {
  if (n == 0 || n == 1 || n == 2) return n;
  let oneStepBefore = 2;
  let twoStepBefore = 1;
  let all_ways = 0;

  for (let i = 3; i <= n; i++) {
    all_ways = oneStepBefore + twoStepBefore;
    twoStepBefore = oneStepBefore;
    oneStepBefore = all_ways;
  }
  return all_ways;
};

/**@other
 * 解法三：动态规划(自底向上+迭代)
 * time:O(n)
 * space:O(n)
 * runtime:56ms 96.53%
 * memory usage:32.5MB 100%
 */
var climbStairs = function (n) {
  let dp = [0,1,2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/**@other
 * 解法四：尾递归
 * time:O(n)
 * space:O(1)
 * runtime:84ms 8.47%
 * memory usage:37.7MB 9.52%
 */
var climbStairs = function(n) {
  function fib(n,a,b){
      if(n<=1) return b;
      return fib(n-1,b,a+b);
  }
  return fib(n,1,1);
};

/**@other
 * 解法五：Binets Formula
 * Fn =1/√5 * (((1+√5)/2)^n-((1-√5)/2)^n)
 * 
 * time:O(logn),pow方法将会用去O(logn)的时间
 * space:O(1)
 */
var climbStairs = function(n) {
  const sqrt5 = Math.sqrt(5);
  const fibn = Math.pow((1 + sqrt5)/2,n+1) - Math.pow((1 - sqrt5)/2,n+1);
  return Math.round(fibn / sqrt5);
};
// @lc code=end