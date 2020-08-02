/**
 * 难度：简单
 * 题目：231. 2的幂
 * 相似题目：
 * 
  给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

  示例 1:
  输入: 1
  输出: true
  解释: 20 = 1

  示例 2:
  输入: 16
  输出: true
  解释: 24 = 16

  示例 3:
  输入: 218
  输出: false

 */

/**
 * @param {number} n
 * @return {boolean}
 */
/**@sponge
 * 解法一：位运算
 * 思路：
 * 如果n是2的幂，代表它的二进制形式里面有且只有一个二进制位是1，
 * 如果n是2的幂，n一定要大于0
 * 1.给count赋初值0，用来计算1出现的次数
 * 2.如果 n!=0 && n>0 的情况下，
 *  说明n中的二进制位1未被完全清零，
 *  进入循环将n重新赋值为清零后的数并count+1计数
 * 3.最后n被完全清零会跳出循环，看count是否为1，即二进制位1出现的次数是否为1
 *  为1返回true，否则false
 * 
 * time:O(1),最好的情况是只有一个二进制位1，那么只用执行一次，最坏情况是有32个1，那么需要执行32次
 * space:O(1)
 * runtime:92ms 56%
 * memory usage:39.3MB 62%
 */
var isPowerOfTwo = function(n) {
  let count = 0;
  while (n!=0 && n>0) {
    n = n & (n - 1);
    count++;
  }
  return count == 1 ? true : false;
};

/**@sponge
 * 解法二：位运算(最优解)
 * 思路：清零最低位1之后 看是否为0，为0代表n的二进制位中只有一个1，所以清零后就为0了
 * 同时n必须大于0，
 * time:O(1)，只执行一次
 * space:O(1)
 * runtime:96ms 42%
 * memory usage:39.2MB 81%
 */
var isPowerOfTwo = function(n) {
  return (n & (n - 1)) == 0 && n > 0 ? true : false;
};