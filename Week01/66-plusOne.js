/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */

/**@sponge
 * 解法一：
 * 一开始的想法但是发现Number数据类型整数位超过16位，超过的部分会全部置0
 * 参考@gatsby-23，将Number数据类型改为ES10基本类型BigInt可以表示任意大的整数
 * 
 * 1.已知传入参数必定为数值型数组
 * 2.将参数转换为字符型（Array.prototype.join()）
 * 3.由字符型变为BigInt型（BigInt构造函数)）
 * 4.进行专属于BigInt类型的数学计算
 * 5.计算结果再次变为字符型（String构造函数）
 * 6.将字符型数值变更为数组（String.prototype.split()）
 * 
 * runtime: 72ms beats46.22%
 * memory usage: 33.3MB beats 100%
 */
var plusOne = function(digits) {
  let num = BigInt(digits.join(''));
  // BigInt基本类型进行数学操作时，需要在数字字面量后加个n
  let string = String(num + 1n);
  let ary = string.split('');

  return ary.map(str => Number(str));
};

/**@sponge 
 *  解法二：
 *  1.当末位为9的情况：末位为9需要进位所以当前值置0，
 *   继续往前看有没有需要进位的数，没有则前一位+1并return
 *  2.当末位不为9的情况：直接将末位+1并return
 *  3.当数组里的数都为9的情况：由于遍历的每个数都为9，所以全部置0，
 *   然后跳出循环，在数组开头插入1并return
 *  时间复杂度：O(n)
 *  runtime: 72ms beats46.22%
 *  memory usage: 32.7MB beats 100%
 */
var plusOne = function (digits) {
  let len = digits.length;
  
  for (let i = len - 1; i >= 0; i--) {
    if(digits[i] == 9)
      digits[i] = 0;
    else {
      digits[i]++;
      return digits;
    }
  }
  //数组都为9的情况
  digits.unshift(1)
  return digits;
};

/**@other  
 *  解法三：余数法，类似的解法
 *  1.末位+1，将当前值置为余数，根据余数看是否需要进位：
 *    1-余数为0的情况：余数为0说明当前值为10,所以当前值为余数0
 *    2-余数不为0的情况：直接return
 *  2.当数组里的数都为9的情况：由于遍历的每个数都为9，所以遍历的每一位余数都为0
 *    最后会跳出循环往下执行，将数组长度+1，每个数置0，第一位置1并return
 *  时间复杂度：O(n)
 *  runtime: 56ms beats98.1%
 *  memory usage: 32.4MB beats 100%
 */
var plusOne = function(digits) {
  const len = digits.length;
  for(let i = len - 1; i >= 0; i--) {
      digits[i]++;
      digits[i] %= 10;
      if(digits[i]!=0)
          return digits;
  }
  digits = [...Array(len + 1)].map(_=>0);;
  digits[0] = 1;
  return digits;
};

// @lc code=end