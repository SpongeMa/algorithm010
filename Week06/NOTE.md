# **动态规划-Dynamic Programming**

Simplifying a complicated problem by breaking it down into simpler sub-problems（in a recursive manner）

可以利用分治 + 最优子结构的方式去解决动态规划的题目

- Divide & Conquer + Optimal substructure

**解决动态规划题目的方式一：**

1. 找出最优子结构

   opt[n] = best_of(opt[n-1],opt[n-2],…)

2. 储存中间状态opt[i]

3. 递推公式(状态转移方程、DP方程)

   Fib：opt[i]=opt[n-1]+opt[n-2]

   二维路径：opt[i,j]=opt[i+1]\[j]+opt\[i][j+1] （且判断a[i,j]是否是空地）



**解决动态规划题目的方式二：**

1. **每种动态规划解决方案都设计网格**

2. - 单元格中的值通常就是你要优化的值
   - 每个单元格都是一个子问题，因此要考虑如何将问题分为子问题，有助于找出网格的坐标轴。

3. **绘制网格的时候要考虑如下问题：**

4. - 单元格中的值是什么
   - 如何将这个问题划分为子问题
   - 网格的坐标轴是什么

5. **填充网格**

6. - 费曼算法

   - - 将问题写下来
     - 好好思考
     - 将答案写下来

 

**动态规划、递归、分治的区别的关键**

- 是看有无最优子结构
- 共性：找到重复的子问题
- 差异性：最优子结构、中途可以淘汰次优解