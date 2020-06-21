/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (60.05%)
 * Likes:    205
 * Dislikes: 0
 * Total Accepted:    108.9K
 * Total Submissions: 180.7K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 边界条件：如果 s 和 t 的长度不同，t 不能是 s 的变位词，直接返回false。

/**@other
 * 解法一：排序
 * 通过将 s 的字母重新排列成 t 来生成变位词。
 * 如果 T 是 S 的变位词，对两个字符串进行排序将产生两个相同的字符串。
 * 
 * time:O(nlogn)
 * space:O(1)
 * runtime:116ms 37.83%
 * memory usage:40.3MB 14.29%
 */
var isAnagram = function(s, t) {
  if(s.length !=t.length) return false;  
  return s.split('').sort().join('') === t.split('').sort().join('');
};


/**@other
 * 解法二：哈希表（对象）
 * 1.创建sMap对象
 * 2.遍历 s, 将各字母出现的次数叠加存储进 map 中;
 * 3.遍历 t, 在 map 中减少相应字母出现的个数, 并增加 map 中未收录的字母;
 * 4.最后根据 flag的值返回 
 * time:O(n)
 * space:O(1)
 * runtime:92ms 63.27%
 * memory usage:37.9MB 42.86%
 */
var isAnagram = function(s, t) {
  if(s.length != t.length) return false;
  let sMap = {};
  let flag = true;
  s.split('').forEach(function(item,index){
      sMap[item]?(sMap[item]++):(sMap[item] = 1);
  })
  let tArr = t.split('');
  for(let i = 0,len = tArr.length;i<len;i++){
      if(sMap[tArr[i]]&&sMap[tArr[i]]>0){
          sMap[tArr[i]]--;
      }else{
          flag = !flag;
          break;
      }
  }
  return flag;
};

/**@other
 * 解法三：哈希映射
 * 初始化 26 个字母数组，遍历字符串 s 和 t
 * s 负责在对应位置增加，t 负责在对应位置减少
 * 如果哈希表的值都为 0，则二者是字母异位词
 * 
 * time:O(n)
 * space:O(1)
 * runtime:92ms 63.27%
 * memory usage:36.4MB 85.71%
 */
var isAnagram = function(s, t) {
  if(s.length != t.length) return false;
  let alpha = [];
  alpha.length = 26;
  alpha.fill(0);
  let a = 'a'.charCodeAt(0);
  for(let i = 0;i<s.length;i++){
    alpha[s.charCodeAt(i) - a]++;
    alpha[t.charCodeAt(i) - a]--;
  }
  for(let i = 0;i<26;i++){
    if(alpha[i]!=0)
      return false;
  }
  return true;
};

// @lc code=end

