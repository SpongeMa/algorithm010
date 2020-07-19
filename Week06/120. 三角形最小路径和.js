/**
 * 难度：中等
 * 题目：120. 三角形最小路径和
 * 给定一个三角形，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同
 * 或者等于 上一层结点下标 + 1 的两个结点。

  例如，给定三角形：
  [
      [2],
      [3,4],
    [6,5,7],
    [4,1,8,3]
  ]
  自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

  说明：
  如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */

/**@other
 * 解法一：递归（超时，自顶向下）
 * time:O(n^2)
 * space:O(n)
 */
var minimumTotal = function(triangle) {
  function dfs(i,j){
      if(i==triangle.length) return 0;
      return Math.min(dfs(i+1,j),dfs(i+1,j+1))+triangle[i][j];
  }
  return dfs(0,0);
};

/**@other
 * 解法二：递归+记忆化（自顶向下）
 * time:O(n*n),n为三角形的行数
 * space:O(n*n),n为三角形的行数
 */
var minimumTotal = function(triangle) {
  let memo = Array.from(new Array(triangle.length),()=>new Array(triangle.length));
  function dfs(i,j){
      if(i==triangle.length) return 0;
      if(memo[i][j] === undefined) memo[i][j] = Math.min(dfs(i+1,j),dfs(i+1,j+1))+triangle[i][j];
      return memo[i][j];
  }
  return dfs(0,0);
};

/**@other
 * 解法三：dp（自底向上的递推）
 * time:O(n^2),n为三角形的行数
 * space:O(n^2),n为三角形的行数
 */
var minimumTotal = function(triangle) {
  let dp = Array.from(new Array(triangle.length),(item,index)=>new Array(triangle[index].length));
  // 初始化dp最后一行的值
  for (let j = 0; j < dp.length; j++) {
      dp[dp.length-1][j] = triangle[dp.length-1][j];
  }
  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
          dp[i][j] = Math.min(dp[i+1][j],dp[i+1][j+1]) + triangle[i][j];
      }
  }
  return dp[0][0];
};

/**@other
 * 解法四：dp（自底向上的递推）+空间优化
 * time:O(n^2),n为三角形的行数
 * space:O(n),n为三角形的行数
 */
var minimumTotal = function(triangle) {
  const dp = new Array(triangle.length);
  // base case 是最后一行
  for (let i = 0; i < dp.length; i++) {
      dp[i] = triangle[triangle.length - 1][i];
  }
  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
      }
  }
  return dp[0];
};

