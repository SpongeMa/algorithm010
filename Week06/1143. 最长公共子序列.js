/**
 * 难度：中等
 * 题目：1143. 最长公共子序列
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
 * 一个字符串的 子序列 是指这样一个新的字符串：
 * 它是由原字符串在不改变字符的相对顺序的情况下
 * 删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
 * 若这两个字符串没有公共子序列，则返回 0。

    示例 1:
    输入：text1 = "abcde", text2 = "ace" 
    输出：3  
    解释：最长公共子序列是 "ace"，它的长度为 3。
    
    示例 2:
    输入：text1 = "abc", text2 = "abc"
    输出：3
    解释：最长公共子序列是 "abc"，它的长度为 3。
    
    示例 3:
    输入：text1 = "abc", text2 = "def"
    输出：0
    解释：两个字符串没有公共子序列，返回 0。

    提示:
    1 <= text1.length <= 1000
    1 <= text2.length <= 1000
    输入的字符串只含有小写英文字符。

 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/**@sponge
 * 解法一：DP
 * 1.绘制网格
 * 如果两个字母不同，就选择上方或左方邻居中较大的那个
 * 如果两个字母相同，就选择左上方单元格的值+1
 * 伪代码：
 * if word_a[i] == word_b[j]:
 *  cell[i][j] = cell[i-1][j-1] + 1
 * else
 *  cell[i][j] = max(cell[i-1][j],cell[i][j-1])
 * 
 * time:O(n*m),n和m分别为text1和text2的长度.
 * space:O(n*m),n和m分别为text1和text2的长度.
 * runtime:180ms 8%
 * memory usage:51.5MB 33%
 */
var longestCommonSubsequence = function(text1, text2) {
  let n = text1.length;
  let m = text2.length;

  let dp = Array.from(new Array(n+1),()=>new Array(m+1).fill(0));
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
          dp[i][j] = text1[i-1]==text2[j-1] ? 
              dp[i-1][j-1] + 1 : 
              Math.max(dp[i-1][j],dp[i][j-1]);
      }
  }
  return dp[n][m];
};