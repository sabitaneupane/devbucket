---
title: "Data Structure and Algorithm"
metaTitle: "Data Structure and Algorithm | DevBucket"
metaDescription: ""
---

## Introduction

## Table of content

- Introduction to Data Structure and Algorithm
- Complexities and Notations
- Data Structure
  - Built-in data structure
    - Strings
    - Arrays
    - Lists
    - Sets
    - Maps/Dictionaries
    - Queues
    - Stacks
    - Tuples
  - Custom data structure
    - Linked List
    - Tree
    - Graph
    - Hash Table
    - Heap
    - Matrix/Grid
    - Trie
- Algorithm
  - Searching algorithms
  - Sorting algorithms
  - Divide and conquer algorithms
  - Greedy methodology
  - Recursion
  - Backtracking algorithm
  - Dynamic Programming
  - Pattern Searching
  - Mathematical algorithms
  - Geometric algorithms
  - Bitwise algorithms
  - Randomized algorithms
  - Branch and Bound algorithm
  - Math and Bit Manipulation
  - Approximation algorithms
  - Sliding Window algorithms


## Few Key Terms

### Two-pointer approach

The two-pointer approach is a technique commonly used in computer programming to optimize algorithms that require traversing through a sequence of elements, such as an array or a linked list. This technique involves using two pointers or indices that move through the sequence in opposite directions, either towards each other or in a parallel manner.

In the two-pointer approach, one pointer starts at the beginning of the sequence, while the other pointer starts at the end of the sequence. The pointers then move towards each other until they meet in the middle, or until a certain condition is met. This approach can be used to optimize algorithms that require searching, sorting, or manipulating elements in a sequence.

For example, in the context of reversing a string, the two-pointer approach involves using two pointers, one at the beginning and one at the end of the string, and swapping the characters at each position until the pointers meet in the middle. This approach has a time complexity of O(n/2), which is better than the O(n) time complexity of the approach that creates a new string or array. Overall, the two-pointer approach can be a powerful optimization technique for a wide range of programming problems.


```JS
// Reversing a string
const reverseStr = (str) => {
  let ch = str.split('');
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let temp = ch[start];
    ch[start] = ch[end];
    ch[end] = temp;
    start++;
    end--;
  }

  return ch.join('');
};

let str = 'data structure';
console.log(reverseStr(str));

// Output:
// erutcurts atad

// Time Complexity: O(n) 
// Space Complexity: O(n)
```

## Visual 

- https://visualgo.net/en

## Resources

- https://github.com/trekhleb/javascript-algorithms
