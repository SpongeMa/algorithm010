/**
 * 难度：中等
 * 题目：547. 朋友圈
 * 相似题目：
 *  200. 岛屿数量
 *  130. 被围绕的区域
 * 
    班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。
    如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。
    所谓的朋友圈，是指所有朋友的集合。

    给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。
    如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。
    你必须输出所有学生中的已知的朋友圈总数。

    示例 1:
    输入: 
    [[1,1,0],
    [1,1,0],
    [0,0,1]]
    输出: 2 
    说明：已知学生0和学生1互为朋友，他们在一个朋友圈。
    第2个学生自己在一个朋友圈。所以返回2。

    示例 2:
    输入: 
    [[1,1,0],
    [1,1,1],
    [0,1,1]]
    输出: 1
    说明：已知学生0和学生1互为朋友，学生1和学生2互为朋友，
    所以学生0和学生2也是朋友，所以他们三个在一个朋友圈，返回1。

    注意：
    N 在[1,200]的范围内。
    对于所有学生，有M[i][i] = 1。
    如果有M[i][j] = 1，则有M[j][i] = 1。
 */

/**
 * @param {number[][]} M
 * @return {number}
 */
/**@sponge
 * 解法一：并查集
 * 找到集合的个数
 * time:O(n^3),访问整个矩阵一次，并查集操作需要最坏时间O(n);
 * space:O(n),n为parent数组长度
 */
var findCircleNum = function(M) {
  if (!M.length) return 0;
  
  n = M.length;
  let uf = new UnionFind(n); 
  console.log(uf);
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n ; j++) {
      if(M[i][j]==1) uf.union(i,j);
    }
  }
  return uf.count;
};
//并查集类
class UnionFind{
  // 初始化并查集
  constructor(n){
    this.count = n;  //一开始互不联通
    this.parent = new Array(n);  
    this.init();
  }
  // 初始化parent数组，每个数的parent都指向自身
  init(){
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  // 合并，让i,j任意一个节点的parent指向另一个节点的parent上
  union(i,j){
    let p1 = this.find(i);
    let p2 = this.find(j);
    if (p1 == p2) return;
    this.parent[p1] = p2;  //将两个集合合并为一个
    this.count--; //两个分量合二为一,所以集合数量-1
  }
  // 查找，返回某个节点x的parent领头元素，time:O(n)，树的最坏时间为0(n)
  find(p){
    let root = p;
    // 如果不是领头元素
    while (this.parent[root] != root) { 
      root = this.parent[root];
    }
    // 路径压缩
    while (this.parent[p] != p) {
      let x = p;
      p = this.parent[p];
      this.parent[p] = root;
    }
    return root;
  }
}