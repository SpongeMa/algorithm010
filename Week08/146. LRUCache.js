/**
 * 难度：中等
 * 题目：146. LRU缓存机制
 * 
  运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。
  它应该支持以下操作： 获取数据 get 和 写入数据 put 。
  获取数据 get(key) - 
    如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
  写入数据 put(key, value) - 
    如果关键字已经存在，则变更其数据值；
    如果关键字不存在，则插入该组「关键字/值」。
    当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，
    从而为新的数据值留出空间。

  进阶:
  你是否可以在 O(1) 时间复杂度内完成这两种操作？

  示例:
  LRUCache cache = new LRUCache( 2 ); //2为缓存容量

  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1);       // 返回  1
  cache.put(3, 3);    // 该操作会使得关键字 2 作废
  cache.get(2);       // 返回 -1 (未找到)
  cache.put(4, 4);    // 该操作会使得关键字 1 作废
  cache.get(1);       // 返回 -1 (未找到)
  cache.get(3);       // 返回  3
  cache.get(4);       // 返回  4
 */

/**@other
 * 解法一：用Map对象实现，利用Map有序的特点实现
 * time:O(??)
 * space:O(capacity)
 * runtime:240ms 56%
 * memory usage:50.2MB 73%
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  // 缓存用一个Map对象存储
  this.cache = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  // 如果cache中不存在key
  if (!this.cache.has(key)) return -1;
  // cache中存在key
  let value = this.cache.get(key);
  // 先删除原来的key
  this.cache.delete(key);
  // 重新再添加原来的key、value，这样可以达到最近使用过的key值会放到最前面的目的
  this.cache.set(key,value);
  return value;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // 如果cache中存在key，就删掉这个key，再重新set新的key和value，这样可以达到最近使用过的key值会放到最前面同时更新key、value值的目的
  if (this.cache.has(key)) {
      this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) { 
      // 如果cache的不存在key，就需要插入新的key、value。同时如果cache容量超出了指定的缓存容量就要删除最近最少使用的key
      // 获取最近最少使用的key
      let leastUsed = this.cache.keys().next();
      // 并删除最近最少使用的key
      this.cache.delete(leastUsed.value);
  }
  // set key、value
  this.cache.set(key,value);
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/





/**@other
 * 解法二：使用 哈希表 + 双端链表 实现
 * time:O(1)
 * space:O(capacity)
 * runtime:216ms 89%
 * memory usage:50.9MB 7%
 */
class LinkedNode{
  constructor(key=0,value=0){
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}
class DLinkedList{
  constructor(){
      this.head = new LinkedNode();
      this.tail = new LinkedNode();
      this.head.next = this.tail;
      this.tail.prev = this.head;
  }
  insertFirst(node){
      node.prev = this.head;
      node.next = this.head.next;
      this.head.next.prev = node;
      this.head.next = node;
  }
  remove(node){
      node.prev.next = node.next;
      node.next.prev = node.prev;
  }
  removeLast(){
      if (this.head.next == this.tail) return null;
      let last = this.tail.prev;
      this.remove(last);
      return last;
  }
}
/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.capacity = capacity;
  // key用一个Map对象存储
  this.keyNodeMap = new Map();
  this.cacheLink = new DLinkedList();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.keyNodeMap.has(key)) return -1;
  let val = this.keyNodeMap.get(key).value;
  this.put(key,val);
  return val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let size = this.keyNodeMap.size;
  // 如果keyNodeMap中存在key，就删掉这个key，再重新set新的key和value
  if (this.keyNodeMap.has(key)) {
      this.cacheLink.remove(this.keyNodeMap.get(key));
      // this.keyNodeMap.delete(key);
      size--;
  } else if (size >= this.capacity) { 
      // 如果cache的不存在key，就需要插入新的key、value。同时如果cache容量超出了指定的缓存容量就要删除最近最少使用的key
      // 并删除最近最少使用的key
      this.keyNodeMap.delete(this.cacheLink.removeLast().key);
  }
  // set key、value
  let firstNode = new LinkedNode(key,value);
  this.keyNodeMap.set(key,firstNode);
  this.cacheLink.insertFirst(firstNode);
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/