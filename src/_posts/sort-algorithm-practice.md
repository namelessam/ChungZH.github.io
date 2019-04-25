---
title: 排序练手 - 算法笔记
tags: 
    - 编程
    - C++
    - 算法
date: 2019/02/23 11:43:00
vssue-title: sort-algorithm-practice
---
上几篇文章中我们讲了几个排序算法，分别是 [冒泡排序](https://chungzh.cn/02/) 、 [桶排序](https://chungzh.cn/09/) 和 [快速排序](https://chungzh.cn/10/)。今天我们来做一题有关排序的题目练练手吧。

<!-- More -->

## 明明的随机数

### 题目描述

明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了 N 个 1 到 1000 之间的随机整数 (N≤100) ，对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作。



### 输入输出格式

输入格式：

输入有两行，第 1 行为 1 个正整数，表示所生成的随机数的个数 N

第 2行有 N 个用空格隔开的正整数，为所产生的随机数。



输出格式：

输出也是两行，第 1 行为 1 个正整数 M ，表示不相同的随机数的个数。

第 2 行为 M 个用空格隔开的正整数，为从小到大排好序的不相同的随机数。



### 输入输出样例

输入样例#1：

```
10
20 40 32 67 40 20 89 300 400 15
```

输出样例#1：

```
8
15 20 32 40 67 89 300 400
```

### 说明

NOIP 2006 普及组 第一题



读完题之后，我们可以马上就想到桶排序。不多说，上代码：

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n, u = 0;
    cin >> n;
    int a[1001] = {0};            // 由于题目中说到“1 到 1000 之间的随机整数”，这里就建立一个有1001个数的数组并初始化为0。
    for (int i = 0; i < n; i++)
    {
        int temp;
        cin >> temp;
        if (a[temp] == 1)
            continue;
        a[temp] = 1;
        u++;
    }

    cout << u << endl;
    
    for (int i = 0; i < 1001; i++)
    {
        if (a[i] == 1)
            cout << i << " ";
    }
    return 0;
}


```



下篇文章我们来学习一个比较简单的数据结构：队列。

------


如果你想学习数据结构和算法，却苦于没有简单易学的教程，那么我给你推荐下面这个课程：

[AI前奏必备-数据结构与算法课 - 老九学堂](https://study.163.com/course/introduction/1004943019.htm?share=1&shareId=1033054447)

（此课程中还有Cocos2dx和前端入门课赠送。）

------

作者：ChungZH