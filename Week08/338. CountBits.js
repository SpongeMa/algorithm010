/**
 * 难度：中等
 * 题目：338. 比特位计数
 * 相似题目：
 * 
  给定一个非负整数 num。
  对于 0 ≤ i ≤ num 范围中的每个数字 i ，
  计算其二进制数中的 1 的数目并将它们作为数组返回。

  示例 1:
  输入: 2
  输出: [0,1,1]

  示例 2:
  输入: 5
  输出: [0,1,1,2,1,2]

  进阶:
  给出时间复杂度为O(n*sizeof(integer))的解答非常容易。
  但你可以在线性时间O(n)内用一趟扫描做到吗？
  要求算法的空间复杂度为O(n)。
  你能进一步完善解法吗？
  要求在C++或任何其他语言中不使用
  任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 */
/**
 * @param {number} num
 * @return {number[]}
 */
/**@sponge
 * 解法一：位运算
 * 
 * time:O(n*sizeof(integer))
 * space:O(n)
 * runtime:1712ms 5%
 * memory usage:52.2MB 6%
 */
var countBits = function(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    let temp = i;
    let count = 0;
    while (temp != 0) {
      temp = temp & (temp - 1);
      count++;
      console.log(count);
    }
    arr.push(count);
  }
  return arr;
};