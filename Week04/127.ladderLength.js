/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (41.81%)
 * Likes:    364
 * Dislikes: 0
 * Total Accepted:    47.5K
 * Total Submissions: 111.4K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: 0
 * 
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

/**@other
 * 解法一：BFS
 * time:O(n*m),n是wordList.length,m是beginword.length
 * space:O(n*m),要在allComboMap记录每个单词的m个通用状态，访问数组的大小是n
 * runtime:136ms 76.83%
 * memory usage:50.9MB 50%
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if(!wordList.includes(endWord)) return 0;  //如果wordList不存在endWord，返回0

  let allComboMap = {}; //所有组合map
  let len = beginWord.length;

  // 对 wordList 做预处理，找出所有的通用状态
  for (let i = 0;i<wordList.length;i++) {
    for(let j = 0;j<len;j++){
      let tmp = wordList[i].slice(0,j)+'*'+wordList[i].slice(j+1);
      //将通用状态记录在字典中，键是通用状态，值是所有具有通用状态的单词。
      if(allComboMap[tmp])
        allComboMap[tmp].push(wordList[i]);
      else 
        allComboMap[tmp] = [wordList[i]]
    }
  }

  let queue = [[beginWord,1]]; //将包含 beginWord 和 1 的元组放入队列中，1 代表节点的层次。我们需要返回 endWord 的层次也就是从 beginWord 出发的最短距离。
  let visited = new Set(); //为了防止出现环，使用访问数组记录。
  visited.add(beginWord);

  while (queue.length) {
    let [word,level] = queue.shift(); 
    //找到 word 的所有通用状态
    for (let i=0;i<len;i++) {
      let newWord = word.slice(0,i)+'*'+word.slice(i+1);
      if(!allComboMap[newWord]) continue; //如果word的当前通用状态不存在，则跳过

      //检查这些通用状态是否存在其它单词的映射
      for (let adjacentWord of allComboMap[newWord]) {
        // 找到endWord返回其最短长度
        if(adjacentWord == endWord) 
          return level + 1;

        //如果adjacentWord没有被访问过，将其加入队列并加入已访问列表
        if (!visited.has(adjacentWord)) {
          queue.push([adjacentWord,level+1])
          visited.add(adjacentWord);
        }
      }
    }
  }  
  return 0; //没有找到
};

/**@other
 * 解法二：双向BFS
 * 与解法一类似，但是是从头尾两个部分一起搜索遍历，当一个节点被头尾都搜索到就终止
 * time:O(n*m),n是wordList.length,m是beginword.length
 * space:O(n*m),要在allComboMap记录每个单词的m个通用状态，访问数组的大小是n
 * runtime:176ms 63.64%
 * memory usage:52.2MB 50%
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if(!wordList.includes(endWord)) return 0;
  let allComboMap = {};
  let len = beginWord.length;

  for (let word of wordList) {
    for (let i = 0;i<len;i++) {
      let genericForms = word.slice(0,i) + '*' +word.slice(i+1);
      if(allComboMap[genericForms])
        allComboMap[genericForms].push(word);
      else
        allComboMap[genericForms] = [word];
    }
  }
  let queueBegin = [[beginWord,1]];
  let queueEnd = [[endWord,1]];
  let visitedBegin = new Map();
  let visitedEnd = new Map();
  visitedBegin.set(beginWord,1);
  visitedEnd.set(endWord,1);
  while (queueBegin.length && queueEnd.length) {
    //from Begin
    let ans = visitWordNode(queueBegin,visitedBegin,visitedEnd);
    if (ans>-1) return ans;
    //from End
    ans = visitWordNode(queueEnd,visitedEnd,visitedBegin);
    if (ans>-1) return ans;
  }

  function visitWordNode(queue,visited,otherVisited){
    let [word,level] = queue.shift();
    for (let i = 0;i<len;i++){
      let newWord = word.slice(0,i) + '*' + word.slice(i+1);
      
      if(!allComboMap[newWord]) continue;
      for (let adjacentWord of allComboMap[newWord]) {
        if (otherVisited.has(adjacentWord))
          return level + otherVisited.get(adjacentWord);
        
        if (!visited.has(adjacentWord)) {
          visited.set(adjacentWord,level+1);
          queue.push([adjacentWord,level+1]);
        }
      }
    }
    return -1;
  }
  return 0;
}

/**@other
 * 解法三：
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = 
}
// @lc code=end

