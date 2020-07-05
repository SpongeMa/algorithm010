/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (62.88%)
 * Likes:    555
 * Dislikes: 0
 * Total Accepted:    153.7K
 * Total Submissions: 243.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/**@other
 * 解法一：BFS(层序遍历)
 * time:O(n),每个点进队出队各一次
 * space:O(n),队列中元素的个数不超过n个
 * runtime:64ms 93.82%
 * memory usage:37.2MB 8.33%
 */
var levelOrder = function (root) {
  if (!root) return [];

  let queue = [];
  let result = [];
  queue.push(root); //将根节点放如队列中

  while (queue.length) {
    let size = queue.length; //获取当前队列的长度，即这一层的节点个数
    let level = []; //存放每一层的所有结点

    //循环每一层的结点
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val); //将队列中的元素都取出来(即获取这一层的节点)，放到当前层level中
      //如果节点的左右子树不为空，则放如队列中
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(level); //将leve当前层的所有结点加入结果数组中
  }
  return result;
};

/**@other
 * 解法二：DFS(递归) 
 * 由于DFS不是按层访问,所以要加个level记录当前层数
 * 当递归到新节点要把该节点放如level对应的列表的末尾
 * 当遍历到新的一层level,而最终结果 result 中还没有创建 level 对应的列表时,
 * 则在 result 中新建一个列表用来保存该 level 的所有节点.
 * 
 * time:O(n),每个点进队出队各一次
 * space:O(h),h是树的高度
 * runtime:84ms 18.9%
 * memory usage:37.4MB 8.33%
 */
var levelOrder = function(root) {
  let result = [];
  if(!root) return result;

  function dfs(level,root){
    if(result.length < level) result.push([]);
    //将当前节点的值加入result中，level表示当前层
    result[level-1].push(root.val);
    //递归的处理左子树，右子树，同时将层数level+1
    root.left && dfs(level+1,root.left);
    root.right && dfs(level+1,root.right);
  }

  dfs(1,root);
  return result;
};
// @lc code=end