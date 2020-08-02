- # 位运算

- 机器里的数字表示方式和存储格式都是二进制

- | **含义** | **运算符** | **示例**                                                | **备注**                                        |
  | -------- | ---------- | ------------------------------------------------------- | ----------------------------------------------- |
  | 左移     | <<         | 0011=>0110                                              | 所有位数向左移一位，缺的位置补0                 |
  | 右移     | >>         | 0110=>0011                                              | 所有位数向右移一位，缺的位置补0                 |
  | 按位或   | \|         | 0011   \| 1011=>1011       0011       1011   =   1011   | 只要有一个是1那么结果那一位就是1，否则是0       |
  | 按位与   | &          | 0011   & 1011=>0011              0011   1011   =   0011 | 只要有一个是0那么结果那一位就是0，否则是1       |
  | 按位取反 | ~          | 0011   =>1100                                           | 全部取反                                        |
  | 按位异或 | ^          | 0011   ^ 1011=>1000              0011   1011   =   1000 | 相同位为0不同为1       也可用“不进位加法”来理解 |

- **异或操作的一些特点**

- - x^0=x
  - x^1s=~x  //注意1s=~0,1s为全1
  - x^(~x)=1s
  - c=a^b=>a^c=b,b^c=a //交换两个数
  - a^b^c = a^(b^c) = (a^b) ^ c

- **获取指定位置的位运算**

- 1. 将x最右边的n位清零——先将0全部取反，全部为1后左移n位，不足位补0，最后和x与，只要有0那就是0，否则是1。

     **x&(~0<<n)**

  2. 获取x的第n位值（0或者1）——先将x右移n位，那么x的第n位就变成最后一位了，最后和1与，就得到了第n位的值

     **(x>>n)&1**

  3. 获取x的第n位的幂值——先将一个1往左移移到高位去，最后和x与

     **x&(1<<n)**

  4. 仅将第n位置为1

     **x|(1<<n)**

  5. 仅将第n位置为0

     **x&(~(1<<n))**

  6. 将x最高位至第n位（含）清零：

     **x&((1<<n)-1)**

- ![重要](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFCSURBVDhPnZNRTsMwDIbtthJ7GxXjmXECxibedwN2A8oN9hoJCU1C9BrrDcYN4BkV6A32DlPHG0htgx2yqEm7afBJUX4ntePELuziIx5GPLTZiqfnbUQgcap1K6jnBvndxaDyq1fWXumdhzfPb2rDYWsG5GxOrmsXfI9HY60tUMICEbqspYRPiTBRGw64ikdzmq9+zT+TqDf4Z5DkSKSRegMWvMB6H+hKmfdVqHexqrBPJuzsfxfjcJat2W6UcXU/XADipTYtXGemWUZEs9kA5bruzFgZ5Ldnh+VBsNyUrw0PitNQZEtt2hmUHX/iOnMPaKmoZGA1lRWAmsc0iwT5xKf5WAwoyoNepnX6P2qYK3D6VSfI1Ykopz3xwhUxcMfSx3MaJxT8erNvMuD0aUrolfuuM3Ms0seeSPskZwio2x/gBxXHd1j10YF/AAAAAElFTkSuQmCC) **实战位运算要点**

- 1. 判断奇偶

  2. - X%2==1 => (x&1)==1
     - X%2==0 => (x&1)==0

  3. x >> 1 => x/2

     即x=x/2 => x=x>>1;

     例如：mid = (left+right)/2 =>      mid = (left+right) >> 1;

  4. x = x  & (x-1)  =>清零最低位的1

  5. x & -x  => 得到最低位的1

  6. x&~x => 0



