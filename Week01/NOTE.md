学习笔记

**时间、空间复杂度**

------

主要用**Big O notation**来表示

- O(1): Constant Complexity 常数复杂度
- O(log n): Logarithmic Complexity 对数复杂度
- O(n): Linear Complexity 线性时间复杂度
- O(n^2): N square Complexity 平方
- O(n^3): N cubic Complexity 立方
- O(2^n): Exponential Growth 指数
- O(n!): Factorial 阶乘



### 一维基础数据结构

- 数组array
- 链表linked list
- 跳表skip list

#### **数组array**

| 操作    | 时间复杂度 | 备注                                                         |
| :------ | :--------- | ------------------------------------------------------------ |
| prepend | O(1)       | 注：正常情况下应该是O(n)，但是可以进行特殊优化到O(1)。采用的方式是申请稍大一些的内存空，然后再数组最开始预留一部分空间，然后prepend时把第一个下标前移一个位置即可 |
| append  | O(1)       |                                                              |
| loopup  | O(1)       |                                                              |
| insert  | O(n)       |                                                              |
| delete  | O(n)       |                                                              |

#### **链表linked list**

| 操作    | 时间复杂度 | 备注 |
| :------ | :--------- | ---- |
| prepend | O(1)       |      |
| append  | O(1)       |      |
| loopup  | O(n)       |      |
| insert  | O(1)       |      |
| delete  | O(1)       |      |

#### 跳表skip list

跳表对标的是平衡树（AVL Tree）和二分查找，是一种插入、删除、搜索都是O(log n)的数据结构。它最大的优势是原理简单、容易实现、方便扩展、效率高。因此在一些热门的项目里用来代替平衡树，如Redis、LevelDB等。

**注：只能用于元素有序的情况。**

**时间复杂度：**O(log n）



#### **工程中的应用**

- LRU Cache - Linked list
- Redis - Skip List