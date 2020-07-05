## **递归-Recursion**

本质是循环，通过函数体来不断调用自己进行的循环

```python
def recursion(level,param1,param2,...):
 #recursion terminator-递归终结条件
 if level>MAX_LEVEL:
  process_result
  return 
 #process logic in current level-处理当前层逻辑
 process(level,data...)
 #drill down-下探到下一层
 self.recursion(level+1,p1,...)
 #reverse the current level status if needed-清理当前层
```

**思维要点**

1. 不要人肉进行递归，就是自己画递归过程（最大误区）
2. 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题）
3. 数学归纳法思维

**!!!递归的本质就是要找重复性**

- 最近重复性

- - 分治
  - 回溯

- 最优重复性

- - 动态规划

- 

## **回溯算法-Backtracking**

实际上是一种特殊的递归，本质就是要找重复性。

回溯就是不断在每一层去试，每一层有不同的方法，典型问题：八皇后、数独

- 找到一个可能存在的正确的答案
- 在尝试了所有可能的分步方法后如果该问题没有答案，就取消上一步或者上几步的计算
- 再通过其他可能的分步方式

worst：O(2^n)

**题目：**

50. Pow(x, n)

78. ~~子集~~





## **分治算法-Divide&Conquer**

实际上是一种特殊的递归，本质就是要找重复性以及分解问题和最后组合子问题的结果，

与泛型递归的不同在于最后要将子结果再进行一次组合。

```javascript
function divide_conquer(problem,param1,...){
 //recursion teminator，即问题解决完了
 if(problem==null){
  print_result
  return
 }
  
 //prepare data，处理当前逻辑，即 把大问题拆分成子问题
 data = prepare_data(problem);
 subproblems = split_problem(problem,data);
    
 //conquer subproblems，drill down，解决更细节的子问题
 subresult1 = divide_conquer(subproblems[0],p1,...);
 subresult2 = divide_conquer(subproblems[1],p1,...);
 subresult3 = divide_conquer(subproblems[2],p1,...);
                             
 //process and generate the final result
 result = process_result(subresult1,subresult2,subresult3,...);
    
 //revert the current level states
}
```

**题目：**

169. 多数元素

17. 电话号码的字母组合

51. N皇后