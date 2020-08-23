/**
 * 难度：简单
 * 题目：190. 颠倒二进制位
 * 相似题目： 
 *  231. 2的幂
 *  338. 比特位计数
 *  191. 位1的个数
 * 
  颠倒给定的 32 位无符号整数的二进制位。

  示例 1：
  输入: 00000010100101000001111010011100
  输出: 00111001011110000010100101000000
  解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。

      示例 2：
  输入：11111111111111111111111111111101
  输出：10111111111111111111111111111111
  解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
       因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。
   
  提示：
  请注意，在某些语言（如 Java）中，没有无符号整数类型。
  在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，
  因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
  在 Java 中，编译器使用二进制补码记法来表示有符号整数。
  因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。
   
  进阶:
  如果多次调用这个函数，你将如何优化你的算法？

 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/**@sponge
 * 解法一：位运算
 * 思路：从右到左的获取n的二进制形式的每一位 -> 将获取的每一个二进制位从左到右的赋值到ans的每一个二进制位
 * 步骤：
 *  1.循环32次
 *  2.每次循环通过n&1获取n的二进制形式的最低位low，
 *  3.并将ans左移一位之后（保留前面的位数）和low做 或操作,即将最低位low赋值给ans的最低位
 *  4.将n的二进制位向右移1位，丢弃本次循环获取的最低位low（以获得n的二进制形式的每一个二进制位），继续循环，重复2-4步骤，直至循环结束。
 *  5.将ans无符号右移0位（ans >>> 0）,表示将ans变成正数。
 *    解释：
 *    1.为什么要无符号右移0位？
 *      根据MDN文档：即便右移 0 个比特，结果也是非负的。
 *      也就是说右移 0 个比特，结果就会变成正数。
 *    2.为什么要变成正数？（???不知道理解的对不对）
 *      根据MDN文档：js中所有的按位操作符的操作数都会变成补码。
 *      正数的补码原码相同，
 *      负数的补码是原码除符号位外全部取反+1，
 * 
 *            如果n=11111111111111111111111111111101 
 *      那么ans应该=10111111111111111111111111111111
 *      n的最低位是1，所以ans的最高位就一定会是1，最高位是1（即符号位为1）就会变成负数，
 *      又因为js是以补码显示的，所以负数的补码就会按补码转换规则将原码转成补码
 *      最后打印出来的ans就变成了(-1000000000000000000000000000001)
 *      所以可以理解为什么不将ans无符号右移0位 得到的数不是想要的结果，
 *      所以最后一定要把ans >>> 0转成正数。
 * 
 * time:O(1)，共执行32次
 * space:O(1)
 * runtime:92ms 44%
 * memory usage:39.8MB 51%
 */
// 方式一：
var reverseBits = function(n) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
      ans = (ans << 1) | (n & 1);
      n >>= 1;
  }
  return ans >>> 0 ;
};
// 方式二：将上述步骤3的或操作 改成 +操作 
var reverseBits = function(n) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
      ans = (ans << 1) + (n & 1);
      n >>= 1;
  }
  return ans >>> 0 ;
};