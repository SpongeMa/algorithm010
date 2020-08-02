/**
 * 难度：中等
 * 题目：200. 岛屿数量
 * 相似题目：
 * 
    给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，
    请你计算网格中岛屿的数量。
    岛屿总是被水包围，并且每座岛屿只能
    由水平方向或竖直方向上相邻的陆地连接形成。
    此外，你可以假设该网格的四条边均被水包围。

    示例 1:
    输入:
    [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
    ]
    输出: 1

    示例 2:
    输入:
    [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
    ]
    输出: 3
    解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
/**@other
 * 解法一：并查集
 * runtime:124ms 8%
 * memory usage:41.9MB 16%
 */
class UnionFind{
  constructor(grid){
    let n = grid.length;
    let m = grid[0].length;
    this.count = 0;
    this.parent = Array.from(new Array(n),()=>new Array(m));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] == '1') {
          // 二维变一维
          this.parent[i*m+j] = i*m+j;
          this.count++;
        }
      }
    }
  }
  union(p,q){
    let p_root = this.find(p);
    let q_root = this.find(q);
    if (p_root == q_root) return;
    this.parent[q_root] = p_root;
    this.count--;
  }
  find(p){
    while (this.parent[p] != p) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;
  }
}
var numIslands = function(grid) {
  let n = grid.length;
  if (!n) return 0;
  let m = grid[0].length;

  let uf = new UnionFind(grid);
  console.log(uf);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == '1') {
        //二维矩阵m*n,z在一维数组的位置是：（第几行×矩阵宽度）+ 在第几列
        //前面已经执行过，不用往回查
        if (i + 1 < n && grid[i+1][j] == '1') {
          uf.union(i * m + j, (i+1) * m + j);
        }
        if (j + 1 < m && grid[i][j+1] == '1') {
          uf.union(i * m + j, i * m + j + 1);
        }
      }
    }
  }
  return uf.count;
};