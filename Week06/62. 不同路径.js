/**
 * 难度：中等
 * 题目：62. 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。
 * 机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 * 
  例如，上图是一个7 x 3 的网格。有多少可能的路径？

    示例 1:
    输入: m = 3, n = 2
    输出: 3
    解释:
    从左上角开始，总共有 3 条路径可以到达右下角。
    1. 向右 -> 向右 -> 向下
    2. 向右 -> 向下 -> 向右
    3. 向下 -> 向右 -> 向右

    示例 2:
    输入: m = 7, n = 3
    输出: 28

    提示：
    1 <= m, n <= 100
    题目数据保证答案小于等于 2 * 10 ^ 9

 */
/**@sponge
 * 解法一：递归(超时)
 * time:O(n*m)
 * space:O(n)
 */
var uniquePaths = function(m, n) {
  function dfs(i,j){
      if(i==m-1 || j==n-1) return 1;
      return dfs(i+1,j) + dfs(i,j+1);
  }
  return dfs(0,0);
};

/**@sponge
 * 解法二：递归 + 记忆化（超时）
 * time:O(n*m)
 * space:O(n)
 */
var uniquePaths = function(m, n) {
  let memo = Array.from(new Array(m),()=>new Array(n));
  console.log(memo);
  function dfs(i,j){
      if(i==m-1 || j==n-1) memo[i][j] = 1;
      if(memo[i][j]===undefined) memo[i][j] = dfs(i+1,j) + dfs(i,j+1);
      console.log(memo);
      return memo[i][j];
  }
  return dfs(0,0);
};

/**@sponge
 * 解法三：dp
 * time:O(n*m)
 * space:O(n*m)
 * time:104ms 6%
 * memory usage:37.2MB 33%
 */
//方式一：
var uniquePaths = function(m, n) {
  let dp = Array.from(new Array(m),()=>new Array(n));
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          if(i==m-1||j==n-1) dp[i][j] = 1;
          else dp[i][j] = dp[i+1][j] + dp[i][j+1];
      }
  }
  return dp[0][0];
};
//方式二：
var uniquePaths = function(m, n) {
  let dp = Array.from(new Array(m),()=>new Array(n));
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i==0 || j==0) dp[i][j] = 1;
          else dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
  }       
  return dp[m-1][n-1];
};

/**@sponge
 * 解法四：dp + 空间优化
 * time:O(n*m)
 * space:O(n)
 * time:80ms 6%
 * memory usage:37.5MB 33%
 */
var uniquePaths = function(m, n) {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < m; i++) {
      for (let j = 1; j < n; j++) {
          dp[j] += dp[j-1];
      }
  }       
  return dp[n-1];
};