'use strict';
const HashMap = require('./HashMap');
//1. Create a HashMap class

//2. WhatDoesThisDo
//Answer: 
//DO NOT run code prior to attempting to solve the problem
const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

//3. Demonstrate understanding of Hash Maps
//use drawing tool

//4. Remove duplicates

//5. Any permutation a palindrome

//6. Anagram grouping

//7. Separate chaining